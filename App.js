import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import HomeScreen from "./src/screens/Home/Home";
import SearchPlacesScreen from "./src/screens/SearchPlaces/SearchPlaces";
import MapScreen from "./src/screens/Map/Map";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from "./src/store/configureStore";
import {Text, View} from "react-native";
import SplashScreen from 'react-native-splash-screen';

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SideDrawer",
  () => SideDrawer
);
Navigation.registerComponent(
  "awesome-places.ProfileScreen",
  () => ProfileScreen,
  store,
  Provider
);
Navigation.registerComponent(
    "awesome-places.SearchPlacesScreen",
    () => SearchPlacesScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "awesome-places.MapScreen",
    () => MapScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "awesome-places.HomeScreen",
    () => HomeScreen,
    store,
    Provider
);

// Start a App

Navigation.startSingleScreenApp({
    screen: {
        screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
        title: 'Welcome', // title of the screen as appears in the nav bar (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    }
});

export default class App extends React.Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        );
    }
}