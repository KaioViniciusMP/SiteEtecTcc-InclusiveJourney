import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Inclusive Journey",
  description: "Inclusive Journey",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" style={{height: '100%', width: '100%', overflow: 'hidden'}}>
      <head>
        <script src="https://cdn.userway.org/widget.js" data-account="3pxn3QVuJj"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
