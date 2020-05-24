import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import ContactMessageScreen from './components/ContactMessageScreen'

export default function App() {

  const [activeScreen, setActiveScreen] = useState("login-screen")

  let displayActiveScreen
  if (activeScreen === "login-screen") {
    displayActiveScreen = <View><Button title="LOG IN" onPress={() => {setActiveScreen("contact-messages")}} /></View>
  } else if (activeScreen === "contact-messages") {
    displayActiveScreen = <ContactMessageScreen />
  } else if (activeScreen === "testimonials") {
    displayActiveScreen = <View><Text>Reviews will go here</Text></View>
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>The Water Heater Guy Portal</Text>
      </View>
      {displayActiveScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: 'rgba(0, 55, 255, 0.918)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18
  }
});
