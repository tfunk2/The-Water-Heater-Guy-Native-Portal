import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import * as SecureStore from 'expo-secure-store'
import ContactMessage from './ContactMessage'

export default class ContactMessageScreen extends Component {

  state = {
    contactMessages: []
  }

  UNSAFE_componentWillMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const token2 = await SecureStore.getItemAsync('secure_token')
    if (token2 === this.props.token) {
      const response = await fetch('http://localhost:3000/contact_messages', {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token2}`
        }
      })
      const json = await response.json()
      this.setState({ contactMessages: json.reverse() })
    }
  }

  deleteMessage = async (selectedMessageId) => {
    const token2 = await SecureStore.getItemAsync('secure_token')
    if (token2 === this.props.token) {
      const response = await fetch(`http://localhost:3000/contact_messages/${selectedMessageId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token2}`
        }
    })
    this.fetchData()
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList 
            style={styles.list}
            data={this.state.contactMessages} 
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ContactMessage fetchData={this.fetchData} token={this.props.token} deleteMessage={this.deleteMessage} key={item.id} item={item} />}
            onRefresh={this.fetchData}
            refreshing={false}
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