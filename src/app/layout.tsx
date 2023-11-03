import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Amazonas FC - A maior Torcida da Região Norte',
    description: 'Next.js fazendo o Amazonas FC ser conhecido no 🌐',
    icons: ['./icon.png'],
}

export default function RootLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
