import { Button } from './Button'
import Image from 'next/image'
import blurIndigoImage from '@/images/blur-indigo.png'
import dockerWatchApp from '@/images/docker-watch-app.png'

export default function Hero (): JSX.Element {
  return (
    <div className="overflow-hidden bg-slate-900 -mb-32 mt-[-4.5rem] pb-32 pt-[4.5rem] lg:mt-[-4.75rem] lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="font-display text-5xl tracking-tight text-sky-400">
                Collect and visualize Docker metrics, from a container.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Monitor your container&apos;s performance historically and in real-time. Easily deploy as a container.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="#installation">Download</Button>
                <Button href="https://github.com/oslabs-beta/docker-watch-app" variant="secondary">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="relative">
              <Image
                className="absolute -bottom-40 -right-84"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
                <div className="mt-0 flex items-start px-1 text-sm">
                    <Image
                      className="relative"
                      src={dockerWatchApp}
                      alt="Screenshot of Docker Watch App"
                      width={584}
                      height={301}
                      unoptimized={false}
                      priority
                    />
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
