import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Drafts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Drafts</Text>
      <Text>pause projects and continue later</Text>
    </View>
  )
}

export default Drafts

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      },
      header:{
        fontWeight: 'bold',
        marginBottom: 10,
        
      }
})