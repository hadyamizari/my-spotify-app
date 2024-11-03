import {DefaultTheme} from 'react-native-paper'
import {Theme} from './types'

const LightTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    card: 'rgb(255, 255, 255)',
    text: 'rgb(27, 27, 31)',
    border: 'rgb(117, 119, 128)',
    notifications: 'rgb(30, 215, 96)',
    primary: 'rgb(20, 160, 72)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgba(30, 215, 96, 0.2)',
    onPrimaryContainer: 'rgb(0, 24, 72)',
    secondary: 'rgb(88, 94, 113)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgba(30, 215, 96, 0.2)',
    onSecondaryContainer: 'rgb(21, 27, 44)',
    tertiary: 'rgb(115, 84, 113)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(254, 214, 249)',
    onTertiaryContainer: 'rgb(43, 18, 43)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(242, 242, 247)',
    onBackground: 'rgb(27, 27, 31)',
    surface: 'rgb(255, 255, 255)',
    onSurface: 'rgb(27, 27, 31)',
    surfaceVariant: 'rgb(225, 226, 236)',
    onSurfaceVariant: 'rgb(69, 70, 79)',
    outline: 'rgb(117, 119, 128)',
    outlineVariant: 'rgb(197, 198, 208)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(48, 48, 52)',
    inverseOnSurface: 'rgb(242, 240, 244)',
    inversePrimary: 'rgb(178, 197, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgba(30, 215, 96, 0.05)',
      level2: 'rgba(30, 215, 96, 0.2)',
      level3: 'rgba(30, 215, 96, 0.3)',
      level4: 'rgba(30, 215, 96, 0.4)',
      level5: 'rgba(30, 215, 96, 0.5)'
    },
    surfaceDisabled: 'rgba(27, 27, 31, 0.12)',
    onSurfaceDisabled: 'rgba(27, 27, 31, 0.38)',
    backdrop: 'rgba(46, 48, 56, 0.4)'
  }
}

export default LightTheme
