import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NotificationComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <View style={styles.body}>

      <Text style={styles.bodyHead}>No notifications</Text>
      <Text>you will recieve notifications when people</Text>
      <Text>appreciate, comment on, or collect your work</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add a New Project</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NotificationComponent

const styles = StyleSheet.create({
    container:{
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