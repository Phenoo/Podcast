import ClientOnly from './components/ClientOnly'
import Footer from './components/Footer/Footer'
import Subscribe from './components/Subscribe'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import SearchModal from './search/SearchModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Podcast',
  description: 'This is a podcast app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
            <Navbar />
            <SearchModal />
            {children}
            <Subscribe />
            <Footer />
          </ClientOnly>

      </body>
    </html>
  )
}
