import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "./contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flexy - Aplikasi POS Android untuk UMKM",
  description:
    "Aplikasi Point of Sales (POS) Android yang simpel dan efisien untuk UMKM. Fitur kasir digital, laporan penjualan, dan manajemen multi-produk.",
  keywords: "POS, Point of Sales, Android, UMKM, kasir digital, laporan penjualan, Indonesia",
  authors: [{ name: "Flexy Team" }],
  creator: "Flexy",
  publisher: "Flexy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo-apple.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo-apple.png',
    },
  },
  metadataBase: new URL("https://flexy.my.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Flexy - Aplikasi POS Android untuk UMKM",
    description: "Aplikasi Point of Sales (POS) Android yang simpel dan efisien untuk UMKM",
    url: "https://flexy.my.id",
    siteName: "Flexy",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexy - Aplikasi POS Android untuk UMKM",
    description: "Aplikasi Point of Sales (POS) Android yang simpel dan efisien untuk UMKM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-16x16.png" />
        <link rel="mask-icon" href="/logo.svg" color="#2563eb" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
