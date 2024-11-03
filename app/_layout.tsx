import FontAwesome from '@expo/vector-icons/FontAwesome'
import {ThemeProvider} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import {Stack} from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import {useEffect} from 'react'
import 'react-native-reanimated'

import {useStore} from '@/utils/store'

import LightTheme from '@/theme/LightTheme'
import DarkTheme from '@/theme/DarkTheme'
import {StatusBar} from 'expo-status-bar'
import {PaperProvider, Text} from 'react-native-paper'
import {TouchableOpacity, View} from 'react-native'
import {Moon, Sun} from 'lucide-react-native'
import {rem} from '@/constants/remUtils'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)'
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const store = useStore()

  const activeTheme = store.isDark ? DarkTheme : LightTheme
  const toggleTheme = () => store.switchIsDark(!store.isDark)

  return (
    <ThemeProvider value={store.isDark ? DarkTheme : LightTheme}>
      <StatusBar style={store.isDark ? 'light' : 'dark'} />
      <PaperProvider theme={store.isDark ? DarkTheme : LightTheme}>
        <Stack>
          <Stack.Screen
            name='index'
            options={{
              title: '',
              headerStyle: {backgroundColor: activeTheme.colors.background},
              headerBackVisible: false,
              gestureEnabled: false,
              headerBackTitleStyle: false,
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={{backgroundColor: activeTheme.colors.surface, padding: rem(8), paddingHorizontal: rem(15), borderRadius: 15}} onPress={toggleTheme}>
                    {activeTheme === LightTheme ? (
                      <View style={{flexDirection: 'row', gap: rem(10), alignItems: 'center'}}>
                        <Moon size={20} color={activeTheme.colors.primary} />
                        <Text style={{color: activeTheme.colors.primary}}>Mode</Text>
                      </View>
                    ) : (
                      <View style={{flexDirection: 'row', gap: rem(10), alignItems: 'center'}}>
                        <Sun size={20} color={activeTheme.colors.primary} />
                        <Text style={{color: activeTheme.colors.primary}}>Mode</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              )
            }}
          />
          <Stack.Screen name='home' options={{headerShown: false}} />
          <Stack.Screen name='artist-id' options={{title: 'Artist Albums', headerBackTitleVisible: false}} />
        </Stack>
      </PaperProvider>
    </ThemeProvider>
  )
}
