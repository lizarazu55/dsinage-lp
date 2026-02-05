import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const prefectures = new Set([
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
]);

const normalize = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] ?? char;
  });

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isValidPhone = (value: string) =>
  /^0\d{1,4}-?\d{1,4}-?\d{3,4}$/.test(value);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { message: "不正なリクエストです" },
        { status: 400 }
      );
    }

    const { company, name, area, email, phone, message } = body as Record<
      string,
      unknown
    >;

    const companyText = normalize(company);
    const nameText = normalize(name);
    const areaText = normalize(area);
    const emailText = normalize(email);
    const phoneText = normalize(phone);
    const messageText = typeof message === "string" ? message.trim() : "";

    if (!nameText || !areaText || !emailText || !phoneText || !messageText) {
      return NextResponse.json(
        { message: "必須項目が未入力です" },
        { status: 400 }
      );
    }

    if (!prefectures.has(areaText)) {
      return NextResponse.json(
        { message: "エリアの指定が不正です" },
        { status: 400 }
      );
    }

    if (!isValidEmail(emailText)) {
      return NextResponse.json(
        { message: "メールアドレスの形式が不正です" },
        { status: 400 }
      );
    }

    if (!isValidPhone(phoneText)) {
      return NextResponse.json(
        { message: "電話番号の形式が不正です" },
        { status: 400 }
      );
    }

    const safeCompany = escapeHtml(companyText || "未記入");
    const safeName = escapeHtml(nameText);
    const safeArea = escapeHtml(areaText);
    const safeEmail = escapeHtml(emailText);
    const safePhone = escapeHtml(phoneText);
    const safeMessage = escapeHtml(messageText).replace(/\n/g, "<br />");
    const subjectName = nameText.replace(/[\r\n]+/g, " ").trim();

    // 管理者向けメール本文
    const adminEmailContent = `
<h2>LD-visionお問い合わせフォームから新しいお問い合わせが届きました。</h2>

<h3>【お問い合わせ内容】</h3>
<hr />

<p><strong>■ 会社名</strong><br />
${safeCompany}</p>

<p><strong>■ お名前</strong><br />
${safeName}</p>

<p><strong>■ エリア（都道府県）</strong><br />
${safeArea}</p>

<p><strong>■ メールアドレス</strong><br />
${safeEmail}</p>

<p><strong>■ 電話番号</strong><br />
${safePhone}</p>

<p><strong>■ お問い合わせ内容</strong><br />
${safeMessage}</p>

<hr />

<p><em>送信日時: ${new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    })}</em></p>
`;

    // 管理者へメール送信
    const { data: adminEmail, error: adminError } = await resend.emails.send({
      // from: "D-signage Contact Form <onboarding@resend.dev>",
      from: "LD-vision Contact Form <contact@lizarazu.tokyo>",
      to: "signage@liberal.tokyo",
      subject: `【LD-vision】お問い合わせ: ${subjectName}様より`,
      html: adminEmailContent,
      replyTo: emailText,
    });

    if (adminError) {
      throw adminError;
    }

    // お客様向け自動返信メール本文
    const customerEmailContent = `
<p>${safeName} 様</p>

<p>この度は、LD-visionへお問い合わせいただき、誠にありがとうございます。<br />
以下の内容でお問い合わせを受け付けました。</p>

<hr />

<p><strong>■ 会社名</strong><br />
${safeCompany}</p>

<p><strong>■ お名前</strong><br />
${safeName}</p>

<p><strong>■ エリア（都道府県）</strong><br />
${safeArea}</p>

<p><strong>■ メールアドレス</strong><br />
${safeEmail}</p>

<p><strong>■ 電話番号</strong><br />
${safePhone}</p>

<p><strong>■ お問い合わせ内容</strong><br />
${safeMessage}</p>

<hr />

<p>担当者より2営業日以内にご連絡させていただきます。<br />
今しばらくお待ちください。</p>

<p><em>※このメールは自動送信されています。<br />
※心当たりのない方は、お手数ですがこのメールを破棄してください。</em></p>

<hr />

<p>
<strong>LD-vision（エルディービジョン）</strong><br />
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
        from: "LD-vision <contact@lizarazu.tokyo>",
        to: emailText,
        subject: "【LD-vision】お問い合わせありがとうございます（自動返信）",
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
