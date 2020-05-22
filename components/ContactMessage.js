import React from 'react'
import { Text, Button, View, Stylesheet } from 'react-native'

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
        <View>
            <Text>{changeTimeFormat()}</Text>
            <Text>{props.item.full_name}</Text>
            <Text>{props.item.address}</Text>
            <Text>{props.item.email}</Text>
            <Text>{props.item.phone_number}</Text>
            <Text>{props.item.message}</Text>
        </View>
    )
}