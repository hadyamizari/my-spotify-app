import {FlatList, Image, StyleSheet, TouchableOpacity, View, Linking, SafeAreaView} from 'react-native'
import React, {useEffect, useState} from 'react'
import {MD3Theme, useTheme, Text, Surface} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import {useLocalSearchParams} from 'expo-router'
import axios from 'axios'
import {ExternalLink} from 'lucide-react-native'

interface AlbumItem {
  id: string
  images: {
    url: string
    width: number
    height: number
  }[]
  name: string
  release_date: string
  total_tracks: number
  external_urls: {
    spotify: string
  }
}

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  const {id, token, artist_name} = useLocalSearchParams() // Get query parameters (artist ID, token, artist name) from route
  const [albums, setAlbums] = useState([])

  // Fetch artist's albums from Spotify API using the artist ID and access token
  const retrieveAlbums = async () => {
    const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
      headers: {Authorization: `Bearer ${token}`}
    })
    setAlbums(response.data.items)
  }

  // Fetch albums data on initial render
  useEffect(() => {
    retrieveAlbums()
  }, [])

  // Format a given date string to "YYYY-MM-DD" format
  const formattedDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant='titleLarge' style={{fontWeight: '300'}}>
          {artist_name}
        </Text>
      </View>

      {/* Display albums in a list with each album as a card */}
      <FlatList
        data={albums}
        keyExtractor={(item: AlbumItem) => item.id}
        renderItem={({item}) => (
          <Surface mode='flat' style={styles.card}>
            <Image source={{uri: item.images[0]?.url}} style={styles.image} />

            <View style={styles.rightCard}>
              <Text variant='titleMedium' style={styles.title}>
                {item.name}
              </Text>

              <Text variant='labelSmall' style={styles.dimmedText}>
                {formattedDate(item.release_date)}
              </Text>

              <Text variant='labelSmall' style={styles.dimmedText}>
                {item.total_tracks} Tracks
              </Text>

              {/* Link to view the album on Spotify */}
              <TouchableOpacity style={styles.linkPressable} onPress={() => Linking.openURL(item.external_urls.spotify)}>
                <ExternalLink color={theme.colors.primary} size={15} strokeWidth={1.6} />
                <Text variant='labelSmall' style={styles.link}>
                  Preview on Spotify
                </Text>
              </TouchableOpacity>
            </View>
          </Surface>
        )}
      />
    </SafeAreaView>
  )
}

export default Home

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: rem(5)},
    header: {margin: rem(10)},
    card: {backgroundColor: theme.colors.surface, padding: rem(10), margin: rem(5), borderRadius: 15, flexDirection: 'row', gap: rem(15)},
    rightCard: {justifyContent: 'center', gap: rem(2), flex: 1},
    image: {width: 100, height: 100, borderRadius: 15, alignSelf: 'center'},
    title: {marginBottom: rem(5), fontSize: 18, fontWeight: '300'},
    dimmedText: {color: theme.colors.outline, fontWeight: '400'},
    linkPressable: {flexDirection: 'row', gap: rem(5), alignItems: 'center'},
    link: {color: theme.colors.primary}
  })
