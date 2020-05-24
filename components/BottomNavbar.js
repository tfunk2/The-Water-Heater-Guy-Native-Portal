import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function BottomNavbar (props) {
    return (
        <View style={styles.navbarContainer}>
            <TouchableOpacity style={styles.tab} onPress={() => props.changeActiveTab("contact-messages")}>
                <Text style={styles.tabText}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab} onPress={() => props.changeActiveTab("testimonials")}>
                <Text style={styles.tabText}>Testimonials</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 55, 255, 0.918)',
        alignItems: 'center',
        height: 80
    },
    tab: {
        width: '100%',
        height: '100%',
        flex: 1,
        borderRightWidth: 1, 
        borderLeftWidth: 1,
        borderColor: 'navy',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    tabText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
})