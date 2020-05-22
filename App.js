import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import ContactMessage from './components/ContactMessage'

export default class App extends Component {

  state = {
    contactMessages: []
  }

  UNSAFE_componentWillMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3000/contact_messages')
    const json = await response.json()
    this.setState({ contactMessages: json })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>The Water Heater Guy Portal Native App</Text>
        <FlatList 
          data={this.state.contactMessages} 
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ContactMessage key={item.id} item={item} />} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
});
