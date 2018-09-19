import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const singleMenuItem = props => (
    <TouchableOpacity onPress={props.onLogoutPress}>
        <View style={styles.drawerItem}>
            <Icon
                name={Platform.OS === "android" ? props.iconAndroid : props.iconIos}
                size={30}
                color="#aaa"
                style={styles.drawerItemIcon}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#eee"
    },
    drawerItemIcon: {
        marginRight: 10
    }
});

export default singleMenuItem;
