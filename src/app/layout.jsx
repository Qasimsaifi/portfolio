import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Qasim Saifi - Full Stack Web Developer Portfolio',
  description: 'Explore the web development projects and skills of Kasim Saifi.',
}

export default function RootLayout({ children }) {
  return (<>
    <html data-theme="valentine" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    {/* <Footer/> */}
  </>
  )
}
