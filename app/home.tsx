import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button, MD3Theme, Searchbar, useTheme, Text, Avatar, Surface} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import axios from 'axios'
import {router} from 'expo-router'
import {Star} from 'lucide-react-native'

interface Artist {
  id: string
  name: string
  followers: number
  popularity: number
  external_urls: {
    spotify: string
  }
}

interface ArtistsResponse {
  artists: {
    items: Artist[]
  }
}

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  const [query, setQuery] = useState('')
  const [artists, setArtists] = useState<Artist[]>([])
  const [url, setUrl] = useState()

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

      const spotifyLinks = response.data.artists.items.map((item) => item.external_urls)
      console.log('hii: ', spotifyLinks)
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
      <ScrollView>
        {artists.map((artist) => (
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: '/artist-id',
                params: {
                  id: artist.id,
                  url: `https://open.spotify.com/artist/${artist.id}`
                }
              })
            }}
            key={artist.id}
          >
            <Surface style={styles.card} key={artist.id}>
              {/* <Avatar.Image size={24} source={require('../assets/avatar.png')} /> */}

              <View style={styles.cardLeft}>
                <Avatar.Text size={40} label='JD' />

                <View style={styles.cardLeftTextContainer}>
                  <Text variant='bodyLarge' style={styles.name} key={artist.id}>
                    John Doe
                    {artist.name}
                  </Text>
                  <Text variant='labelSmall' style={styles.followers}>
                    1,500 Followers
                    {artist.followers}
                  </Text>
                </View>
              </View>
              <View style={styles.cardRight}>
                {artist.popularity}
                <Star size={17} strokeWidth={2} fill={'rgb(241,210,66)'} color={'rgb(241,210,66)'} />
                <Star size={17} strokeWidth={2} fill={'rgb(241,210,66)'} color={'rgb(241,210,66)'} />
                <Star size={17} strokeWidth={2} fill={'rgb(241,210,66)'} color={'rgb(241,210,66)'} />
                <Star size={17} strokeWidth={0.5} color={theme.colors.onSurface} />
                <Star size={17} strokeWidth={0.5} color={theme.colors.onSurface} />
              </View>
            </Surface>
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
    card: {backgroundColor: theme.colors.surface, padding: rem(10), margin: rem(5), borderRadius: 15, flexDirection: 'row', justifyContent: 'space-between'},
    cardLeft: {flexDirection: 'row', gap: rem(10), alignItems: 'center'},
    cardLeftTextContainer: {},
    name: {fontWeight: '400'},
    followers: {color: theme.colors.outline, fontWeight: '300'},
    cardRight: {flexDirection: 'row', gap: rem(2), alignItems: 'center'}
  })
