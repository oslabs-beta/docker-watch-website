import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500',
  secondary:
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
}

export function Button ({ variant = 'primary', className = '', href, ...props }): JSX.Element {
  className = clsx(styles[variant], className)

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return (href)
    ? (
    <Link href={href} className={className} {...props} />
      )
    : (
    <button className={className} {...props} />
      )
}
