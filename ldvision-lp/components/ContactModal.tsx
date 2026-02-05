'use client'

import { useEffect, useState } from 'react'

type ContactModalProps = {
    isOpen: boolean
    onClose: () => void
    status: 'success' | 'error'
}

export function ContactModal({ isOpen, onClose, status }: ContactModalProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            document.body.style.overflow = 'hidden'
        } else {
            setIsVisible(false)
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-[#0b101b] border border-brand-light-blue/20 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl transform transition-all duration-300 scale-100">
                <div className="mb-6 flex justify-center">
                    {status === 'success' ? (
                        <div className="w-16 h-16 rounded-full bg-brand-light-blue/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                    {status === 'success' ? '送信が完了しました' : '送信に失敗しました'}
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed whitespace-pre-line">
                    {status === 'success'
                        ? 'お問い合わせありがとうございます。\n内容を確認次第、担当者よりご連絡いたします。'
                        : '申し訳ございません。\nシステムエラーが発生しました。\n時間をおいて再度お試しいただくか、\nお電話にてお問い合わせください。'}
                </p>

                <button
                    onClick={onClose}
                    className="w-full bg-gradient-blue py-3 rounded-full font-semibold tracking-wider text-white hover:opacity-90 transition shadow-lg shadow-brand-light-blue/20"
                >
                    閉じる
                </button>
            </div>
        </div>
    )
}
