import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ClickConvert Agency",
  description:
    "Somos una agencia de marketing digital con sede en Argentina y estamos aquí para ayudarte a llevar tu negocio al siguiente nivel. En ClickConvert Agency, entendemos que el éxito en el mundo digital se basa en la creación de un sólido embudo de ventas que transforme a los visitantes en clientes leales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head></Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-L5CRLFB0D2"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

          gtag('config', 'G-L5CRLFB0D2');
        `}
      </Script>
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
