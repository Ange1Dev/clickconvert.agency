import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ClickConvert Agency',
  description: 'Somos una agencia de marketing digital con sede en Argentina y estamos aquí para ayudarte a llevar tu negocio al siguiente nivel. En ClickConvert Agency, entendemos que el éxito en el mundo digital se basa en la creación de un sólido embudo de ventas que transforme a los visitantes en clientes leales.',
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
