import * as React from 'react'

import ThemeContext from './ThemeContext'

type Props = {
  value: any
  children: React.ReactNode
}

export default function ThemeProvider({ value, children }: Props) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
