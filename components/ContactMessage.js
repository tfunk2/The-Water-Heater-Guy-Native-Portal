import React, { useState } from 'react'
import { 
    Text, 
    Button, 
    Alert, 
    View, 
    StyleSheet, 
    TouchableOpacity,
    TouchableWithoutFeedback 
} from 'react-native'

export default function ContactMessage (props) {

    const [messageExpanded, setMessageExpanded] = useState(false)

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

    const handleMessagePress = () => {
        if (messageExpanded === true) {
            setMessageExpanded(false)
        } else {
            setMessageExpanded(true)
        }
    }

    let expandContent;

    if (messageExpanded) {
        expandContent = 
            <View>
                <Text style={styles.innerText}>{props.item.address}</Text>
                <Text style={styles.innerText}>{props.item.email}</Text>
                <Text style={styles.innerText}>{props.item.phone_number}</Text>
                <Text style={styles.innerText}>{props.item.message}</Text>
                <TouchableOpacity 
                    style={styles.deleteButton} 
                    onPress={() => props.deleteMessage(props.item.id)}
                >
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
    } else {
        expandContent = <></>
    }

    

    return (
        <TouchableOpacity style={styles.outerContainer} activeOpacity={0.8} onPress={handleMessagePress}>
                <View style={styles.innerLeftContainer}>
                    <Text style={styles.innerText}>{changeTimeFormat()}</Text>
                    <Text style={styles.innerText}>{props.item.full_name}</Text>
                    {expandContent}
                </View>
                <View style={styles.innerRightContainer}>
                    {
                        messageExpanded === true ? 
                        <Text style={styles.arrow}>&and;</Text> :
                        <Text style={styles.arrow}>&or;</Text> 
                    }
                </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    outerContainer: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // minWidth: '94%',
        maxWidth: '94%'
    },
    innerText: {
        fontSize: 20
    },
    innerRightContainer: {
        marginTop: 20
    },
    arrow: {
        fontSize: 20
    },
    deleteButton: {
        marginTop: 20,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 80,
        backgroundColor: 'rgba(214, 214, 214, 0.8)',
        padding: 5,
        borderRadius: 8
    },
    deleteText: {
        color: 'rgb(250,82,1)',
        fontSize: 16
    }
})