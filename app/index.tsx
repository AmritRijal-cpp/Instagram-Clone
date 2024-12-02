import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const App = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-secondary font-rblack text-lg text-tint-primary">
        Custom Tailwind Styles
      </Text>
      <Link href="/create">To Home</Link>
      <StatusBar style='light' backgroundColor='#000000' />
    </SafeAreaView>
  )
}


export default App