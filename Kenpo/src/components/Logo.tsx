import LogoIcon from '../assets/logo.svg?react'

type Props = {
  className: string;
}

export default function Logo({className}: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
        <LogoIcon className='w-8 h-8 text-accent' />
        <div>
          <h1 className='text-text text-lg font-semibold'>Kenpo</h1>
          <p className='text-text-muted text-xs'>Achieve Greatness</p>
        </div>
    </div>
  )
}