import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'


const Following = ({closeModal}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
        <Icon name='cancel' size={30} />
        </TouchableOpacity>
      <Text>Following</Text>
    </View>
  )
}

export default Following

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',     
},
closeIcon:{
    position: 'absolute',
    top: 60,
    right: 15,
    justifyContent: 'center',
    alignItems:'center', 
}
})