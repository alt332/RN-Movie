import React from "react";
import { Platform, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { fromRight } from "react-navigation-transitions";

import MovieListScreen from "./screens/MovieListScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";

// const AppNavigator = FluidNavigator({
//   MovieList: { screen: MovieListScreen },
//   MovieDetails: { screen: MovieDetailsScreen }
// });

const MovieStack = createStackNavigator(
  {
    MovieList: {
      screen: MovieListScreen,
      navigationOptions: {
        title: "Moives",
        headerStyle: {
          backgroundColor: "rgb(27, 34, 50)",
          borderBottomWidth: 0
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold"
        }
      }
    },
    MovieDetails: {
      screen: MovieDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Moive Details",
        headerStyle: {
          backgroundColor: "rgb(27, 34, 50)",
          borderBottomWidth: 0
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold"
        },
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20
            }}
          >
            <Icon
              name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
              size={24}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        )
      })
    }
  },
  {
    initialRouteName: "MovieList",
    transitionConfig: () => fromRight(500),
    defaultNavigationOptions: {
      headerBackTitle: null
    }
  }
);

export default createAppContainer(MovieStack);
