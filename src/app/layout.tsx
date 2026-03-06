import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bobby Goldsmith — Technical Architect & Automation Engineer',
  description: 'Portfolio of Bobby Goldsmith — 13+ years building automation, QA, and DevOps solutions. Principal Consultant at NodeBridge Automation Solutions.',
  keywords: 'Bobby Goldsmith, Technical Architect, Automation Engineer, QA Lead, DevOps, MCP Tools, Playwright, NodeBridge, Portfolio',
  authors: [{ name: 'Bobby Goldsmith' }],
  creator: 'Bobby Goldsmith',
  metadataBase: new URL('https://bobbygoldsmith.dev'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Bobby Goldsmith — Technical Architect & Automation Engineer',
    description: '13+ years building automation, QA, and DevOps solutions. Principal Consultant at NodeBridge Automation Solutions.',
    url: 'https://bobbygoldsmith.dev',
    siteName: 'Bobby Goldsmith',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bobby Goldsmith — Technical Architect & Automation Engineer',
    description: '13+ years building automation, QA, and DevOps solutions. Principal Consultant at NodeBridge Automation Solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bobby Goldsmith",
              "url": "https://bobbygoldsmith.dev",
              "jobTitle": "Technical Architect & Automation Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "NodeBridge Automation Solutions"
              },
              "sameAs": [
                "https://github.com/bobbyrgoldsmith",
                "https://www.linkedin.com/in/bobby-r-goldsmith/"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
