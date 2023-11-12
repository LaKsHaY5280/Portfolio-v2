import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Lakshay Goyal - Portfolio",
  description:
    "Greetings! I am Lakshay Goyal, a web developer who crafts captivating digital experiences. With an artistic flair and a user-centric mindset, I weave wonders on the web.",
};

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
