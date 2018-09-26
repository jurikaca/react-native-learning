import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { connect } from "react-redux";
import profile_img from "../../assets/profile.png";

class ProfileScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.profileHeader}>
              <View>
                  <Image resizeMode="cover" source={profile_img} style={styles.profileImage}/>
                  <Text style={styles.profileName}>Name Surname</Text>
              </View>
              <View style={styles.profileStats}>
                  <Text style={[styles.alignRight, styles.InfoItem]}>12 followers</Text>
                  <Text style={[styles.alignRight, styles.InfoItem]}>12 places posted</Text>
              </View>
          </View>

          <View style={styles.profileContent}>
              <View>
                  <Text style={styles.profileContentTitle}>Personal Info</Text>
              </View>
              <View style={styles.profileInfo}>
                  <Text style={styles.InfoItem}>Name: First Name</Text>
                  <Text style={styles.InfoItem}>Surname: Last Name</Text>
                  <Text style={styles.InfoItem}>Email: test@gmail.com</Text>
                  <Text style={styles.InfoItem}>Phone: +355 69 46 23 623</Text>
                  <Text style={styles.InfoItem}>Address: Location to the addrees, 1001, st. 1930</Text>
                  <Text style={styles.InfoItem}>City: Tirana</Text>
                  <Text style={styles.InfoItem}>Country: Albania</Text>
              </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%"
  },
  profileHeader: {
    flex: 2,
    flexDirection: "row",
    width: "100%"
  },
  profileStats: {
    flex: 1,
    marginRight: 20,
    width: "100%"
  },
  profileName: {
    marginTop: 10,
    fontSize: 20,
    color: "#555",
    fontWeight: "bold",
    textAlign: "center"
  },
  alignRight: {
    textAlign: "right"
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000"
  },
  profileContent: {
    marginTop: 30
  },
  profileContentTitle: {
    fontSize: 15,
    color: "#555",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#e0e0e0"
  },
  profileInfo: {
    marginTop: 10
  },
  InfoItem: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
  }
});

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps, null)(ProfileScreen);