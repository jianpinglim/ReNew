import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile Page',
  description: 'A profile page created with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}