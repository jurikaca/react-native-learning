import React, { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet
} from "react-native";
import SingleMenuItem from "../../components/SingleMenuItem/SingleMenuItem";

class SideDrawer extends Component {

  onLogOut = () => {
      alert('loging out');
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <SingleMenuItem
            iconAndroid={"md-person"}
            iconIos={"ios-person"}
            text={"Profile"}
        />
        <SingleMenuItem
            iconAndroid={"md-settings"}
            iconIos={"ios-settings"}
            text={"Account Settings"}
        />
        <SingleMenuItem
            onLogoutPress={this.onLogOut}
            iconAndroid={"md-log-out"}
            iconIos={"ios-log-out"}
            text={"Sign Out"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  }
});

export default SideDrawer;
