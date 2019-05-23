import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { getStatusBarHeight } from "react-native-status-bar-height";

import Header from "./components/Header";
import MovieList from "./components/MovieList";

export default (App = () => {
  return (
    <View style={styles.container}>
      <Header />

      <MovieList />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    backgroundColor: "rgb(28, 34, 50)"
  }
});
