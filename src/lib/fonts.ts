import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const customFont = localFont({
  src: [
    {
      path: '../../public/fonts/defonteplus_normale.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/defonteplus_normale.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
  display: 'swap',
})