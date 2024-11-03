import {FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {Button, MD3Theme, Searchbar, useTheme, Text, Avatar, Surface} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import axios from 'axios'
import {router, useLocalSearchParams} from 'expo-router'
import {Star} from 'lucide-react-native'
import {debounce} from 'lodash'

interface Artist {
  id: string
  name: string
  followers: {
    total: number
  }
  popularity: number
  genres: string[]
  images: {
    url: string
    height: number
    width: number
  }[]
  external_urls: {
    spotify: string
  }
}

interface ArtistsResponse {
  artists: {
    items: Artist[]
  }
}

interface StarRatingProps {
  popularity: number
}

const yellow = 'rgb(241,210,66)'

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)
  const {client_id, client_secret} = useLocalSearchParams()

  const [query, setQuery] = useState('')
  const [artists, setArtists] = useState<Artist[]>([])
  const [token, setToken] = useState()

  useEffect(() => {
    getAccessToken()
  }, [])

  const getAccessToken = async () => {
    const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${client_id}:${client_secret}`)
      }
    })
    return response.data.access_token
  }

  const handleSearch = async () => {
    const token = await getAccessToken()
    setToken(token)

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

  // debounced search function
  const debouncedSearch = useCallback(debounce(handleSearch, 500), [query])

  // run debounced search whenever the query changes
  useEffect(() => {
    if (query) {
      debouncedSearch()
    } else {
      setArtists([]) // Clear artists list when query is empty
    }
  }, [query, debouncedSearch])

  const handleClearSearch = () => {
    setQuery('')
    setArtists([])
  }

  const StarRating: React.FC<StarRatingProps> = ({popularity}) => {
    const MAX_STARS = 5
    const filledStars = Math.ceil(popularity / 20)
    const unfilledStars = MAX_STARS - filledStars

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* Render filled stars */}
        {Array.from({length: filledStars}).map((_, index) => (
          <Star key={`filled-${index}`} size={17} strokeWidth={2} fill={yellow} color={yellow} />
        ))}
        {/* Render unfilled stars */}
        {Array.from({length: unfilledStars}).map((_, index) => (
          <Star key={`unfilled-${index}`} size={17} strokeWidth={0.5} color={theme.colors.onSurface} />
        ))}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder='Search for an artist..'
        value={query}
        onChangeText={setQuery}
        onClearIconPress={handleClearSearch}
        style={styles.searchBar}
        placeholderTextColor={theme.colors.outline}
        inputStyle={styles.input}
        iconColor={theme.colors.outline}
      />

      <FlatList
        data={artists}
        keyExtractor={(artist: Artist) => artist.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: '/artist-id',
                params: {id: item.id, token: token, artist_name: item.name}
              })
            }}
          >
            <Surface mode='flat' style={styles.card}>
              <View style={styles.cardLeft}>
                <Avatar.Image size={60} source={{uri: item.images[0]?.url}} />

                <View style={styles.cardLeftTextContainer}>
                  <Text variant='titleMedium' style={styles.name}>
                    {item.name}
                  </Text>
                  <Text variant='labelSmall' style={styles.followers}>
                    {new Intl.NumberFormat().format(item.followers.total)} Followers
                  </Text>
                </View>
              </View>
              <View style={styles.cardRight}>
                <StarRating popularity={item.popularity} />
              </View>
            </Surface>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default Home

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: rem(10)},
    searchBar: {backgroundColor: theme.colors.surfaceVariant, paddingHorizontal: rem(10), marginBottom: rem(10), height: rem(40)},
    input: {alignSelf: 'center'},
    card: {backgroundColor: theme.colors.surface, padding: rem(10), paddingRight: rem(20), margin: rem(5), borderRadius: 15, flexDirection: 'row', justifyContent: 'space-between'},
    cardLeft: {flexDirection: 'row', gap: rem(15), alignItems: 'center'},
    cardLeftTextContainer: {gap: rem(5)},
    name: {fontWeight: '300', fontSize: 18},
    followers: {color: theme.colors.outline, fontWeight: '300'},
    cardRight: {flexDirection: 'row', gap: rem(2), alignItems: 'center'}
  })
