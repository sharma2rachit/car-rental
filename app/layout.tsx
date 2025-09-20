import './globals.css'
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import NavBar from '@/components/NavBar'

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <header className="flex justify-between items-center p-4 gap-4 h-16 border-b">
            <div className="flex items-center">
              <img src="/logo.png" alt="logo" width={100} height={100} />
            </div>
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <button className="bg-blue-500 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-blue-600">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <SignedIn>
            <NavBar/>
            {children}
          </SignedIn>
          <SignedOut>
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Car Rental</h1>
                <p className="text-gray-600 mb-8">Please sign in to access our car rental services</p>
                <div className="flex gap-4 justify-center">
                  <SignInButton>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </div>
            </div>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  )
}
