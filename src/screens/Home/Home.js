import React, { Component } from "react";
import {
  View,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

import HomePlaceList from "../../components/PlaceList/HomePlaceList";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
          <HomePlaceList
              places={this.props.places}
              onItemSelected={this.itemSelectedHandler}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(HomeScreen);
