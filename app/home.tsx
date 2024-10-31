import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button, Card, MD3Theme, Searchbar, useTheme, Text} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import axios from 'axios'
import {router} from 'expo-router'

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  const [query, setQuery] = useState('')
  const [artists, setArtists] = useState<Artist[]>([])

  useEffect(() => {
    getAccessToken()
  }, [])

  const getAccessToken = async () => {
    const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('9650f03f4d264da2b34a6444770e271a:0645010a3e2a46b291bd99e0ddd6d57e')
      }
    })
    return response.data.access_token
  }

  const handleSearch = async () => {
    const token = await getAccessToken()
    try {
      const response = await axios.get<ArtistsResponse>(`https://api.spotify.com/v1/search`, {
        headers: {Authorization: `Bearer ${token}`},
        params: {q: query, type: 'artist'}
      })
      setArtists(response.data.artists.items)
    } catch (error) {
      console.error('Error fetching artist data:', error)
    }
  }

  const handleClearSearch = () => {
    setQuery('')
    setArtists([])
  }

  interface Artist {
    id: string
    name: string
  }

  interface ArtistsResponse {
    artists: {
      items: Artist[]
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar placeholder='Search for an artist..' onChangeText={setQuery} onClearIconPress={handleClearSearch} value={query} />
      <Button onPress={handleSearch}>Submit</Button>
      <ScrollView>
        {artists.map((artist) => (
          <TouchableOpacity onPress={() => {}} key={artist.id}>
            <Card mode='contained' style={styles.card} key={artist.id}>
              {/* <Avatar.Image size={24} source={require('../assets/avatar.png')} /> */}
              <Text variant='labelMedium' key={artist.id}>
                {artist.name}
              </Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: rem(20)},
    card: {padding: rem(15), marginVertical: rem(5), flexDirection: 'row', justifyContent: 'space-between'}
  })
