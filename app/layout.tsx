import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Yirle - Yearly recorder',
  description: 'Yearly recorder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <main className={`min-h-screen bg-[#f2f2f2] text-[#555555] flex flex-col items-center font-inter `}>
          {children}
        </main>
      </body>
    </html>
  )
}
