import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sapão Jogos',
  description: 'Site para ajudar a encontrar seus jogos favoritos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position='bottom-right'/>
      </body>
    </html>
  )
}
