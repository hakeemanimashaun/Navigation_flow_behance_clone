import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotificationComponent from './NotificationComponent'
import MessageNotificationComponent from './MessageNotificationComponent'

const Notification = () => {
  return (
    <View style={styles.container}>
      <NotificationComponent />
      <MessageNotificationComponent/>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container:{
 paddingTop: 60,
  }
})