import {MD3Typescale} from 'react-native-paper/lib/typescript/types'

export interface Theme {
  version?: number
  isV3?: boolean
  dark: boolean
  roundness: number
  fonts?: MD3Typescale
  colors: {
    card: string
    text?: string
    border?: string
    notifications?: string
    primary: string
    onPrimary: string
    primaryContainer: string
    onPrimaryContainer: string
    secondary: string
    onSecondary: string
    secondaryContainer: string
    onSecondaryContainer: string
    tertiary: string
    onTertiary: string
    tertiaryContainer: string
    onTertiaryContainer: string
    error: string
    onError: string
    errorContainer: string
    onErrorContainer: string
    background: string
    onBackground: string
    surface: string
    onSurface: string
    surfaceVariant: string
    onSurfaceVariant: string
    outline: string
    outlineVariant: string
    shadow: string
    scrim: string
    inverseSurface: string
    inverseOnSurface: string
    inversePrimary: string
    elevation: {
      level0: string
      level1: string
      level2: string
      level3: string
      level4: string
      level5: string
    }
    surfaceDisabled: string
    onSurfaceDisabled: string
    backdrop: string
  }
}
