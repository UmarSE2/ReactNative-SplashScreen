import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  SplashScreen.hide();
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default App