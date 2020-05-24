import React from 'react'
import { 
    Text, 
    Button, 
    Alert, 
    View, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native'

export default function ContactMessage (props) {

    const fullDate = new Date(props.item.created_at).toString();

    function changeTimeFormat() {
        const hourAndMinute = fullDate.slice(16, 21)
        const splitHourAndMinute = hourAndMinute.split(':')

        let finalTime;
        if (+splitHourAndMinute[0] > 12) {
            finalTime = (+splitHourAndMinute[0] - 12) + ":" + splitHourAndMinute[1] + " pm"
        } else if (+splitHourAndMinute[0] === 0) {
            finalTime = "12:" + parseInt(splitHourAndMinute[1]) + " am"
        } else {
        finalTime = +splitHourAndMinute[0] + ":" + splitHourAndMinute[1] + " am"
        }

        const date = fullDate.slice(0, 15)

        return date + " " + finalTime
    }

    return (
        <View style={styles.outerContainer}>
            <Text style={styles.innerText}>{changeTimeFormat()}</Text>
            <Text style={styles.innerText}>{props.item.full_name}</Text>
            <Text style={styles.innerText}>{props.item.address}</Text>
            <Text style={styles.innerText}>{props.item.email}</Text>
            <Text style={styles.innerText}>{props.item.phone_number}</Text>
            <Text style={styles.innerText}>{props.item.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    innerText: {
        fontSize: 20
    }
})