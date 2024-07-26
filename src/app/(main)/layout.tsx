import type { Metadata } from 'next'
import { Sen } from 'next/font/google'
import '../styles/globals.scss'
import { Header } from 'shared/ui/header'
import { StoreProvider } from 'app/providers/store/StoreProvider'

const sen = Sen({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robin.W',
  description: 'Landing created by Ororura for study'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={sen.className}>
          <Header></Header>
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
