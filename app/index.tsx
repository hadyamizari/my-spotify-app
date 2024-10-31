import {StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import {Button, MD3Theme, useTheme} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import {User} from 'lucide-react-native'
import {router} from 'expo-router'

const Index = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  return (
    <SafeAreaView style={styles.container}>
      <Button mode='contained-tonal' onPress={() => router.push('/home')} icon={() => <User size={15} color={theme.colors.onSurface} />}>
        Login
      </Button>
    </SafeAreaView>
  )
}

export default Index

const createStyles = (theme: MD3Theme) => StyleSheet.create({container: {flex: 1, justifyContent: 'center', margin: rem(20)}})
