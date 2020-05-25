import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Testimonial from './Testimonial'

export default class TestimonialScreen extends Component {

  state = {
    testimonials: []
  }

  UNSAFE_componentWillMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3000/testimonials')
    const json = await response.json()
    this.setState({ testimonials: json.reverse() })
  }

  deleteMessage = async (selectedMessageId) => {
    const response = await fetch(`http://localhost:3000/testimonials/${selectedMessageId}`, {
        method: "DELETE"
    })
    const newMessages = this.state.testimonials.filter(message => {
        message.id !== selectedMessageId
    })
    this.setState({ testimonials: newMessages })
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList 
            style={styles.list}
            data={this.state.testimonials} 
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Testimonial deleteMessage={this.deleteMessage} key={item.id} item={item} />} 
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