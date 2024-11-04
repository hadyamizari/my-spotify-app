import {StyleSheet, SafeAreaView, View, Image, Linking} from 'react-native'
import React, {useEffect} from 'react'
import {Button, MD3Theme, useTheme} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import {router} from 'expo-router'
import {useStore} from '@/utils/store'

const CLIENT_ID = '9650f03f4d264da2b34a6444770e271a'
const REDIRECT_URI = 'myspotifyapp://callback'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'
const SCOPE = 'user-read-private user-read-email'

const Index = () => {
  const theme = useTheme()
  const styles = createStyles(theme)
  const store = useStore()

  useEffect(() => {
    const handleDeepLink = (url: string) => {
      console.log('Received URL:', url) // Log the received URL
      const token = extractAccessToken(url)
      if (token) {
        console.log('Access token extracted:', token) // Log the extracted token
        store.setToken(token)
        router.push({pathname: '/home', params: {token: token}})
      } else {
        console.error('Access token not found in URL') // Log if the token extraction fails
      }
    }

    const subscription = Linking.addEventListener('url', ({url}) => handleDeepLink(url))

    return () => {
      subscription.remove()
    }
  }, [])

  // Function to extract the access token from the URL
  const extractAccessToken = (url: string) => {
    const token = url.match(/#access_token=([^&]*)/)
    return token ? token[1] : null
  }

  // Function to trigger Spotify Implicit Grant flow
  const handleLogin = () => {
    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}`
    Linking.openURL(authUrl).catch((err) => console.error('Failed to open URL:', err))
    console.log('url: ', authUrl)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} textColor={theme.colors.surface} labelStyle={styles.label} mode='contained-tonal' onPress={handleLogin}>
          Login
        </Button>

        <Image style={styles.spotifyLogo} source={require('../assets/images/logo.png')} />
      </View>
    </SafeAreaView>
  )
}

export default Index

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', margin: rem(20)},
    buttonContainer: {justifyContent: 'center'},
    button: {padding: rem(5), backgroundColor: theme.colors.primary},
    label: {fontWeight: '600', fontSize: 18},
    spotifyLogo: {position: 'absolute', right: 20, height: rem(50), width: rem(50)}
  })
