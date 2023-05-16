import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ClickConvert Agency',
  description: 'Agencia de marketing digital argentina',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      
      <body className={inter.className}>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      </body>
    </html>
  )
}
