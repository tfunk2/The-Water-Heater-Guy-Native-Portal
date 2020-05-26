import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'
import ContactMessageScreen from './ContactMessageScreen'
import TestimonialScreen from './TestimonialScreen'
import BottomNavbar from './BottomNavbar'

export default function MainScreen (props) {

    const [activeTab, setActiveTab] = useState("contact-messages")

    let displayActiveScreen

    if (activeTab === "contact-messages") {
    displayActiveScreen = <ContactMessageScreen token={props.token} changeActiveTab={changeActiveTab}/>
    } else if (activeTab === "testimonials") {
    displayActiveScreen = <TestimonialScreen token={props.token} />
    }

    const changeActiveTab = (tabSelected) => {
        setActiveTab(tabSelected)
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    style={styles.image} 
                    source={require('../images/Water-Heater-Guy-Logo.png')}
                    resizeMode="contain"
                />
            </View>
            {displayActiveScreen}
            <BottomNavbar changeActiveTab={changeActiveTab} />
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
        paddingTop: 12,
        paddingBottom: 2,
        width: '100%',
        height: 100,
        backgroundColor: 'rgba(214, 214, 214, 0.8)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        maxHeight: 80,
        overflow: 'visible'
    }
})