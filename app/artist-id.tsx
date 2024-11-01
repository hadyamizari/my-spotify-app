import {SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import {MD3Theme, useTheme, Text} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import {useLocalSearchParams} from 'expo-router'

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  const {id, url} = useLocalSearchParams()

  // next steps:
  // call api search
  // axios.get(url:https://open.spotify.com/artist/${artist.id})

  return (
    <SafeAreaView style={styles.container}>
      <Text>Artist ID: {id}</Text>
      <Text>Spotify URL: {url}</Text>
    </SafeAreaView>
  )
}

export default Home

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: rem(20)},
    card: {padding: rem(15), marginVertical: rem(5), flexDirection: 'row', justifyContent: 'space-between'}
  })
