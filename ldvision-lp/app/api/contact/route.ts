import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, name, area, email, phone, message } = body;

    // 管理者向けメール本文
    const adminEmailContent = `
<h2>D-signageお問い合わせフォームから新しいお問い合わせが届きました。</h2>

<h3>【お問い合わせ内容】</h3>
<hr />

<p><strong>■ 会社名</strong><br />
${company || "未記入"}</p>

<p><strong>■ お名前</strong><br />
${name}</p>

<p><strong>■ エリア（都道府県）</strong><br />
${area}</p>

<p><strong>■ メールアドレス</strong><br />
${email}</p>

<p><strong>■ 電話番号</strong><br />
${phone || "未記入"}</p>

<p><strong>■ お問い合わせ内容</strong><br />
${message.replace(/\n/g, "<br />")}</p>

<hr />

<p><em>送信日時: ${new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    })}</em></p>
`;

    // 管理者へメール送信
    const { data: adminEmail, error: adminError } = await resend.emails.send({
      // from: "D-signage Contact Form <onboarding@resend.dev>",
      from: "D-signage Contact Form <contact@lizarazu.tokyo>",
      to: "signage@liberal.tokyo",
      subject: `【D-signage】お問い合わせ: ${name}様より`,
      html: adminEmailContent,
      replyTo: email,
    });

    if (adminError) {
      throw adminError;
    }

    // お客様向け自動返信メール本文
    const customerEmailContent = `
<p>${name} 様</p>

<p>この度は、D-signageへお問い合わせいただき、誠にありがとうございます。<br />
以下の内容でお問い合わせを受け付けました。</p>

<hr />

<p><strong>■ 会社名</strong><br />
${company || "未記入"}</p>

<p><strong>■ お名前</strong><br />
${name}</p>

<p><strong>■ エリア（都道府県）</strong><br />
${area}</p>

<p><strong>■ メールアドレス</strong><br />
${email}</p>

<p><strong>■ 電話番号</strong><br />
${phone || "未記入"}</p>

<p><strong>■ お問い合わせ内容</strong><br />
${message.replace(/\n/g, "<br />")}</p>

<hr />

<p>担当者より2営業日以内にご連絡させていただきます。<br />
今しばらくお待ちください。</p>

<p><em>※このメールは自動送信されています。<br />
※心当たりのない方は、お手数ですがこのメールを破棄してください。</em></p>

<hr />

<p>
<strong>D-signage（ディーサイネージ）</strong><br />
お問い合わせ窓口<br />
<br />
電話: 03-5843-3773<br />
受付時間: 平日 10:00〜19:00
</p>
`;

    // お客様へ自動返信メール送信
    const { data: customerEmail, error: customerError } =
      await resend.emails.send({
        // from: "D-signage <onboarding@resend.dev>",　テストメールを送る際はresendにログインするためのアカウントでないと不可
        from: "D-signage <contact@lizarazu.tokyo>",
        to: email,
        subject: "【D-signage】お問い合わせありがとうございます（自動返信）",
        html: customerEmailContent,
      });

    if (customerError) {
      console.error("自動返信メール送信エラー:", customerError);
      // 自動返信が失敗しても、管理者へのメールが成功していれば処理は続行
    }

    return NextResponse.json(
      {
        message: "メールが正常に送信されました",
        id: adminEmail?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { message: "メール送信中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
