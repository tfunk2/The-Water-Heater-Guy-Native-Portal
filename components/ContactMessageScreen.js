import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import ContactMessage from './ContactMessage'

export default class ContactMessageScreen extends Component {

  state = {
    contactMessages: []
  }

  UNSAFE_componentWillMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3000/contact_messages')
    const json = await response.json()
    this.setState({ contactMessages: json.reverse() })
  }

  deleteMessage = async (selectedMessageId) => {
    const response = await fetch(`http://localhost:3000/contact_messages/${selectedMessageId}`, {
        method: "DELETE"
    })
    this.fetchData()
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList 
            style={styles.list}
            data={this.state.contactMessages} 
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ContactMessage deleteMessage={this.deleteMessage} key={item.id} item={item} />} 
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
  },
  list: {
      width: '100%',
      minWidth: '100%',
      flex: 1
  }
});