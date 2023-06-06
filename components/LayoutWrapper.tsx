import { IBM_Plex_Sans_Arabic } from '@next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'
import { useDir } from 'hooks/useDir'

interface Props {
  children: ReactNode
}

const inter = IBM_Plex_Sans_Arabic({
  weight: '400',
  subsets: ['arabic'],
})

const LayoutWrapper = ({ children }: Props) => {
  const { dir } = useDir()
  return (
    <SectionContainer>
      <div
        dir={dir}
        className={`${inter.className} flex h-screen flex-col justify-between font-sans`}
      >
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
