import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MoodBoards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MoodBoards</Text>
      <Text>Find and save projects for research, inspiration or</Text>
      <Text>just because you love them</Text>
    </View>
  );
};

export default MoodBoards;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  header:{
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 18,
  }
});
