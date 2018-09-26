import React, { Component } from "react";
import {
    View,
    StyleSheet, Dimensions
} from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";

class MapScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

    state = {
        focusedLocation: {
            latitude: 37.7900352,
            longitude: -122.4013726,
            latitudeDelta: 0.9,
            longitudeDelta:
            Dimensions.get("window").width /
            Dimensions.get("window").height *
            0.0122
        },
    };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={this.state.focusedLocation}
                style={styles.map}
            >
              
            </MapView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(MapScreen);
