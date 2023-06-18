import ClientOnly from './components/ClientOnly'
import Footer from './components/Footer/Footer'
import Subscribe from './components/Subscribe'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import SearchModal from './search/SearchModal'
import { Suspense } from 'react'
import Loading from './loading'
import { Metadata } from 'next'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://podcast-green-mu.vercel.app"),
  title: {
    default: "Unami Podcast Blog",
    template: `%s | Unami Podcast Blog`,
  },
  description: "A blog that promotes and amplifies podcasts created by underrepresented voices. It can highlight podcasts produced by marginalized communities, featuring a diverse range of perspectives and stories from independant content creators who seeks sponsorships and market access.",
  verification: {
    google: "",
  },
};



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
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
            <Subscribe />
            <Footer />
          </ClientOnly>

      </body>
    </html>
  )
}
