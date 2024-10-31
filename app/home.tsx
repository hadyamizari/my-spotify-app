import {SafeAreaView, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import {Button, MD3Theme, Searchbar, useTheme} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import axios from 'axios'

const getAccessToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa('9650f03f4d264da2b34a6444770e271a:0645010a3e2a46b291bd99e0ddd6d57e')
    }
  })
  return response.data.access_token
}

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  const [query, setQuery] = useState('')
  const [artists, setArtists] = useState([])

  const handleSearch = async () => {
    const token = await getAccessToken()
    try {
      const response = await axios.get(`https://api.spotify.com/v1/search`, {
        headers: {Authorization: `Bearer ${token}`},
        params: {q: query, type: 'artist'}
      })
      setArtists(response.data.artists.items)
      console.log('ARTISTS: ', artists)
    } catch (error) {
      console.error('Error fetching artist data:', error)
    }
  }

  const handleClearSearch = () => {
    setQuery('')
    setArtists([])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar placeholder='Search for an artist..' onChangeText={setQuery} onClearIconPress={handleClearSearch} value={query} />
      <Button onPress={handleSearch}>Submit</Button>
    </SafeAreaView>
  )
}

export default Home

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: rem(20)}
  })
