import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { SharedElement } from "react-native-motion";

export default ({ navigation }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie(navigation.getParam("movie"));
  }, []);

  return movie ? (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <SharedElement sourceId={`cover_image_${movie.id}`}>
          <Image
            style={styles.coverImage}
            source={{ uri: movie.medium_cover_image, cache: "force-cache" }}
          />
        </SharedElement>

        <View style={{ flexDirection: "column", flex: 1, flexWrap: "wrap" }}>
          <Text style={styles.titleText}>{movie.title_english}</Text>
          <Text style={styles.subTitleText}>{movie.year}</Text>
          <Text style={styles.subTitleText}>{movie.runtime} mins</Text>
          <Text style={styles.subTitleText}>{movie.genres.join(", ")}</Text>
        </View>
      </View>

      <ScrollView>
        <Text style={styles.synopsisText}>
          {"\t"}
          {movie.synopsis}
        </Text>
      </ScrollView>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(23, 28, 40)",
    padding: 20
  },
  coverImage: {
    width: 80,
    height: 120,
    borderRadius: 4,
    marginRight: 20
  },
  titleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  subTitleText: {
    color: "#98A3AE"
  },
  synopsisText: {
    marginTop: 20,
    color: "#FFFFFF",
    lineHeight: 24
  }
});
