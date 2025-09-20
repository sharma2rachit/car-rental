import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Providers from '@/components/Providers'
import NavBar from '@/components/NavBar'
import AuthProvider from '@/components/AuthProvider'

const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Rental App',
  description: 'Modern car rental web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthProvider>
            <header className="flex justify-between items-center p-4 gap-4 h-16 border-b">
              <div className="flex items-center">
                <img src="/logo.png" alt="logo" width={100} height={100} />
              </div>
              <div className="flex items-center gap-4">
                <NavBar />
              </div>
            </header>
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  )
}
