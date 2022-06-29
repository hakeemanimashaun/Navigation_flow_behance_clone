import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../utils/INDEX";

const Home = () => {
  const [pressed, setPressed] = useState(true);
  const [otherPressed, setOtherPressed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={pressed ? styles.buttonPressed : styles.button}
          onPress={() => {
            setPressed(true);
            setOtherPressed(false);
          }}
        >
          <Text style={pressed ? styles.textPressed: styles.text}>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={otherPressed ? styles.otherButtonPressed : styles.button}
          onPress={() => {
            setOtherPressed(true);
            setPressed(false);
          }}
        >
          <Text  style={otherPressed ? styles.textPressed: styles.text}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "grey",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 600,
  },
  button: {
    margin: 5,
  },
  buttonPressed: {
    backgroundColor: Colors.Secondary_Color,
    borderTopStartRadius: 25,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 0,
    padding: 10,
  },
  otherButtonPressed: {
    backgroundColor: Colors.Secondary_Color,
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 0,
    padding: 10,
  },
  text:{
    fontSize: 20,
    color: Colors.black
  },
  textPressed:{
    fontSize: 20,
    color: Colors.primary_Color
  }
});
