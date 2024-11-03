import * as React from 'react'

import LightTheme from './LightTheme'

const ThemeContext = React.createContext(LightTheme)

ThemeContext.displayName = 'ThemeContext'

export default ThemeContext
