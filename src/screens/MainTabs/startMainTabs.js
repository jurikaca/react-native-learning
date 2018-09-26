import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-map" : "ios-map", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-add-circle" : "ios-add-circle", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-person" : "ios-person", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-search" : "ios-search", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-home" : "ios-home", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.HomeScreen",
                    label: "Places",
                    title: "Places",
                    icon: sources[5],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[5],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.MapScreen",
                    label: "Places on map",
                    title: "Places on map",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[0],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SearchPlacesScreen",
                    label: "Search Places",
                    title: "Search Places",
                    icon: sources[4],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[4],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.ProfileScreen",
                    label: "My Profile",
                    title: "My Profile",
                    icon: sources[3],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            },
            appStyle: {
                tabBarSelectedButtonColor: "orange"
            },
        });
    });
};

export default startTabs;