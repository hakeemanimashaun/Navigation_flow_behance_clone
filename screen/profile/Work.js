import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FAB } from "react-native-paper";
import { Colors } from "../../utils/INDEX";

const Work = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>No Projects</Text>
      <Text>get feedbacks, views, and appreciations. Public</Text>
      <Text>projects can be featured by our curators</Text>
      <FAB style={styles.fab} icon="plus" onPress={() => {}} />
    </View>
  );
};

export default Work;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  fab: {
    width: 75,
    height: 75,
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    backgroundColor: Colors.Tatiary_color,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
});
