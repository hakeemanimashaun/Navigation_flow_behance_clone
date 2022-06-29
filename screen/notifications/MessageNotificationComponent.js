import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const MessageNotificationComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <View style={styles.body}>

      <Text style={styles.bodyHead}>No messages</Text>
      <Text>stay connected with creatives</Text>
      <Text>and opportunities on behance</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Inbox</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MessageNotificationComponent

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
        paddingBottom: 20
    },
    button:{
        backgroundColor: 'blue',
        marginTop: 30,
        padding: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 50,
    },
    buttonText:{
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15
    },
    header:{
        position: 'absolute',
        top: 5,
        left: 10,
        fontWeight: 'bold',
        fontSize: 20,

    },
    body:{
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    bodyHead:{
        marginBottom: 10,
    }
})