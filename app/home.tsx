import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useState} from 'react'
import {MD3Theme, Searchbar, useTheme} from 'react-native-paper'
import {rem} from '@/constants/remUtils'

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar placeholder='Search for an artist..' onChangeText={setSearchQuery} value={searchQuery} />
    </SafeAreaView>
  )
}

export default Home

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: rem(20)}
  })
