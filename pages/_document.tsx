import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default function Document (): JSX.Element {
  // const router = useRouter()
  // const isHomepage = router.pathname === '/'
  const isHomepage = true

  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        {isHomepage && <Hero />}
        <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
          <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
            <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
