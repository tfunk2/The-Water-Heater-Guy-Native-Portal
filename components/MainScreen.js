import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ContactMessageScreen from './ContactMessageScreen'

export default function MainScreen (props) {

    const [activeTab, setActiveTab] = useState("contact-messages")

    let displayActiveScreen

    if (activeTab === "contact-messages") {
    displayActiveScreen = <ContactMessageScreen />
    } else if (activeTab === "testimonials") {
    displayActiveScreen = <TestimonialScreen />
    } 

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>The Water Heater Guy Portal</Text>
             </View>
            {displayActiveScreen}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    header: {
        width: '100%',
        height: 80,
        backgroundColor: 'rgba(0, 55, 255, 0.918)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 18
    }
})