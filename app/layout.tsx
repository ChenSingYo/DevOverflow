import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/context/ThemeProvider'
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
  title: 'DevOverFlow',
  description:
    "DevOverflow stands as a quintessential platform for developers at every career stage. It's an innovative app designed to harness a collaborative environment where developers can share knowledge, solve challenges, and engage in thought-provoking discussions. The app brings together programmers from diverse technological domains to exchange expertise, ask questions, and find solutions to their coding dilemmas.",
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient hover:text-primary-500',
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
