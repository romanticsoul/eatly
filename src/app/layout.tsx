import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Inter, Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/layout/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Eatly',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          'min-h-screen overflow-y-scroll bg-background font-sans text-[#606060] antialiased xl:text-lg',
          `${inter.variable} ${poppins.variable}`,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
