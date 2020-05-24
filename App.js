import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import MainScreen from './components/MainScreen'

export default function App() {

  const [activeScreen, setActiveScreen] = useState("login-screen")

  let displayActiveScreen
  if (activeScreen === "login-screen") {
    displayActiveScreen = <View><Button title="LOG IN" onPress={() => {setActiveScreen("main-screen")}} /></View>
  } else if (activeScreen === "main-screen") {
    displayActiveScreen = <MainScreen />
  } 
  

  return (
    <View style={styles.container}>
      {displayActiveScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
