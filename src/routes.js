import { createAppContainer, createStackNavigator } from "react-navigation";
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
      navigationOptions: {
        title: "Moive Details",
        headerStyle: {
          marginHorizontal: 10,
          backgroundColor: "rgb(27, 34, 50)",
          borderBottomWidth: 0
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold"
        }
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null
    }
  }
);

export default createAppContainer(MovieStack);
