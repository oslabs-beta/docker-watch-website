import Link from 'next/link'
import Logo from './Logo'
import GitHubIcon from './icons/GitHubIcon'

export default function Header (): JSX.Element {
  return (
    <header
      className="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-slate-900/75 px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8"
    >
      {/* <div className="mr-6 flex lg:hidden sm:hidden"> */}
        {/* <MobileNavigation navigation={navigation} /> */}
        {/* Navigation */}
      {/* </div> */}
      <div className="relative flex flex-grow basis-0 items-center">
        <Logo />
        <div className="ml-16">
          <ul className="flex text-slate-50">
            <li className="mr-6"><Link href="/installation" className="hover:text-sky-400">Installation</Link></li>
            <li className="mr-6"><Link href="/about" className="hover:text-sky-400">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <Link href="https://github.com/oslabs-beta/docker-watch-app" className="group" aria-label="GitHub">
          <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </Link>
      </div>
    </header>
  )
}
