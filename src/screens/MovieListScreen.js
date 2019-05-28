import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  RefreshControl,
  Image,
  TouchableOpacity
} from "react-native";

import { SharedElement } from "react-native-motion";

export default ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieIds, setMovieIds] = useState([]);

  useEffect(() => {
    this.fetchMovies();
  }, []);

  fetchMovies = async (page = 1, loadMore = false) => {
    if (!isLoading) {
      setIsLoading(true);

      const response = await fetch(
        `https://yts.am/api/v2/list_movies.json?page=${page}`
      );

      const {
        data: { movies = [] }
      } = await response.json();

      let ids = movieIds;

      if (loadMore) {
        setCurrentPage(page);
        setData([
          ...data,
          ...movies.filter(m => {
            if (!ids.includes(m.id)) {
              ids.push(m.id);
              return m;
            }
          })
        ]);
      } else {
        ids = [];
        setData(
          movies.filter(m => {
            if (!ids.includes(m.id)) {
              ids.push(m.id);
              return m;
            }
          })
        );
      }

      setMovieIds(ids);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        onEndReached={() => this.fetchMovies(currentPage + 1, true)}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => this.fetchMovies(1, false)}
          />
        }
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieItem}
            onPress={() =>
              navigation.navigate("MovieDetails", {
                movie: item
              })
            }
          >
            <SharedElement id={`cover_image_${item.id}`}>
              <Image
                style={styles.coverImage}
                source={{ uri: item.medium_cover_image, cache: "force-cache" }}
              />
            </SharedElement>

            <View style={styles.infoContainer}>
              <Text style={styles.titleText}>{item.title_long}</Text>

              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>IMDB - {item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(23, 28, 40)"
  },
  coverImage: {
    width: 80,
    height: 120,
    borderRadius: 4
  },
  movieItem: {
    flexDirection: "row",
    borderBottomColor: "rgb(28, 34, 48)",
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  infoContainer: {
    flexShrink: 1,
    marginLeft: 20
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    textTransform: "uppercase",
    marginBottom: 10
  },
  ratingContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  ratingText: {
    color: "rgb(114, 120, 140)"
  }
});
