import {SafeAreaView, StyleSheet, Text} from 'react-native'
import React, {useEffect} from 'react'
import {MD3Theme, useTheme} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import axios from 'axios'

const getAccessToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa('9650f03f4d264da2b34a6444770e271a:0645010a3e2a46b291bd99e0ddd6d57e')
    }
  })
  console.log('response token: ', response.data.access_token)
  return response.data.access_token
}

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  useEffect(() => {
    getAccessToken()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  )
}

export default Home

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: rem(20)}
  })
