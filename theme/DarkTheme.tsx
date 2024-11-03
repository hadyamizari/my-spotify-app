import {DefaultTheme} from 'react-native-paper'
import {Theme} from './types'

const DarkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    card: 'rgb(27, 27, 31)',
    text: 'rgb(228, 226, 230)',
    border: 'rgb(143, 144, 154)',
    notifications: 'rgb(30, 87, 199)',
    primary: 'rgb(30, 215, 96)',
    onPrimary: 'rgb(0, 43, 116)',
    primaryContainer: 'rgba(30, 215, 96, 0.2)',
    onPrimaryContainer: 'rgba(30, 215, 96, 0.4)',
    secondary: 'rgb(192, 198, 221)',
    onSecondary: 'rgb(42, 48, 66)',
    secondaryContainer: 'rgb(64, 70, 89)',
    onSecondaryContainer: 'rgb(220, 226, 249)',
    tertiary: 'rgb(225, 187, 220)',
    onTertiary: 'rgb(66, 39, 65)',
    tertiaryContainer: 'rgb(90, 61, 89)',
    onTertiaryContainer: 'rgb(254, 214, 249)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(27, 27, 31)',
    onBackground: 'rgb(228, 226, 230)',
    surface: 'rgb(35, 36, 42)',
    onSurface: 'rgb(228, 226, 230)',
    surfaceVariant: 'rgb(69, 70, 79)',
    onSurfaceVariant: 'rgb(197, 198, 208)',
    outline: 'rgb(143, 144, 154)',
    outlineVariant: 'rgb(69, 70, 79)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(228, 226, 230)',
    inverseOnSurface: 'rgb(48, 48, 52)',
    inversePrimary: 'rgb(30, 87, 199)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(10, 90, 50)',
      level2: 'rgb(15, 100, 60)',
      level3: 'rgb(20, 110, 70)',
      level4: 'rgb(25, 120, 80)',
      level5: 'rgb(30, 130, 90)'
    },

    surfaceDisabled: 'rgba(228, 226, 230, 0.12)',
    onSurfaceDisabled: 'rgba(228, 226, 230, 0.38)',
    backdrop: 'rgba(46, 48, 56, 0.4)'
  }
}

export default DarkTheme
