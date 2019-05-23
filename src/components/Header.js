import React from "react";
import { StyleSheet, View, Text } from "react-native";

import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default (Header = () => (
  <View style={styles.container}>
    <MaterialIcon name="menu" color="white" size={24} />

    <Text style={styles.titleText}>Movies</Text>

    <AntDesignIcon name="search1" color="white" size={24} />
  </View>
));

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center"
  }
});
