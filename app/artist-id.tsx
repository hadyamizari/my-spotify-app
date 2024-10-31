import {SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import {MD3Theme, useTheme} from 'react-native-paper'
import {rem} from '@/constants/remUtils'

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  return <SafeAreaView style={styles.container}>Artist ID</SafeAreaView>
}

export default Home

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: rem(20)},
    card: {padding: rem(15), marginVertical: rem(5), flexDirection: 'row', justifyContent: 'space-between'}
  })
