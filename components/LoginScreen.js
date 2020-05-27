import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'

export default function LoginScreen (props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameTextChange = (input) => {
            setUsername(input)
    }

    const handlePasswordTextChange = (input) => {
            setPassword(input)
    }

    const handleSubmit = () => {
        console.log(username, password)
        fetchData()

    }

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const json = await response.json()
        const token1 = json.token
        await props.setToken(token1)
        await SecureStore.setItemAsync('secure_token', token1)
        const token2 = await SecureStore.getItemAsync('secure_token')

        if (token2 === token1) {
            props.setActiveScreen("main-screen")
        }
      }

    return (
        <TouchableWithoutFeedback style={styles.screen} onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.loginView}>
                <TextInput 
                    value={username}
                    onChangeText={handleUsernameTextChange}
                    maxLength={18} 
                    placeholderTextColor="blue" 
                    placeholder="Username" 
                    style={styles.textInput}
                > 
                </TextInput>
                <TextInput 
                    value={password}
                    onChangeText={handlePasswordTextChange}
                    maxLength={18} 
                    placeholderTextColor="blue" 
                    placeholder="Password" 
                    style={styles.textInput}
                    secureTextEntry={true}
                >
                </TextInput>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text>Log In</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'grey',
        marginVertical: 10,
        width: '50%',
        backgroundColor: 'rgba(214, 214, 214, 0.8)',
        borderRadius: 6
    },
    loginView: {
        flex: 1,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        width: '100%',
        height: '100%',
    }
})