import { IDirections, ILangTypes } from 'services/types'
import { useState } from 'react'
export const useDir = () => {
  const [dir, setDir] = useState<IDirections>('rtl')
  const toggleDir = (lang: ILangTypes) => {
    setDir(lang === 'ar' ? 'rtl' : 'ltr')
  }

  return {
    dir,
    toggleDir
  }
}
