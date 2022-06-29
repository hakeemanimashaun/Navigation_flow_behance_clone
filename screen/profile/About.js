import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const About = () => {
  const [date, setDate] = useState("10 JUL 2020");
  const [location, setLocation] = useState("Nigeria");
  const details = [
    { detail: "PROJECT VIEWS", number: 0 },
    { detail: "APPRECIATIONS", number: 0 },
    { detail: "FOLLOWERS", number: 0 },
    { detail: "FOLLOWING", number: 0 },
  ];
  const view = ({ item }) => {
    return (
      <View style={styles.viewBox}>
        <Text style={styles.number}>{item.number}</Text>
        <Text style={styles.detail}>{item.detail}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList renderItem={view} data={details} numColumns={2} />
      <View style={styles.locationView}>
        <Text style={{fontWeight: 'bold'}}>LOCATION</Text>
        <View style={styles.locationPinView}> 
          <Icon name="location-pin" size={20} />
          <Text>{location}</Text>
        </View>
      </View>
      <Text>MEMBER SINCE: {date}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingTop: 12,
  },
  viewBox: {
    width: "47%",
    height: 100,
    backgroundColor: "#ECECEC",
    margin: 5,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  number: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "500",
  },
  locationView:{
position: 'absolute',
left: 10,
bottom: 90
  },
  locationPinView:{
    flexDirection: 'row'
  }
});
