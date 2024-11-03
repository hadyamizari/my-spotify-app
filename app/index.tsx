import {StyleSheet, SafeAreaView, View, Image} from 'react-native'
import React from 'react'
import {Button, MD3Theme, useTheme} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import {router} from 'expo-router'

// Main component that displays a login button and logo image
const Index = () => {
  const theme = useTheme() // Retrieves the current theme from react-native-paper
  const styles = createStyles(theme) // Generates styles based on the theme

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        {/* Button that navigates to the Home screen with authentication parameters */}
        <Button
          style={styles.button}
          textColor={theme.colors.surface}
          labelStyle={styles.label}
          mode='contained-tonal'
          onPress={() =>
            router.push({
              pathname: '/home',
              params: {
                client_id: '9650f03f4d264da2b34a6444770e271a',
                client_secret: '0645010a3e2a46b291bd99e0ddd6d57e'
              }
            })
          }
        >
          Login
        </Button>

        {/* Spotify logo displayed next to the login button */}
        <Image style={styles.spotifyLogo} source={require('../assets/images/logo.png')} />
      </View>
    </SafeAreaView>
  )
}

export default Index

// Function to create styles using theme-based colors and spacing
const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', margin: rem(20)},
    buttonContainer: {justifyContent: 'center'},
    button: {padding: rem(5), backgroundColor: theme.colors.primary},
    label: {fontWeight: '600', fontSize: 18},
    spotifyLogo: {position: 'absolute', right: 20, height: rem(50), width: rem(50)}
  })
