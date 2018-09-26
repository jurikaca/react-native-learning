import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import HomeListItem from "../ListItem/HomeListItem";

const homePlaceList = props => {

    if (props.places.length > 0) {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.listContainer}
                    data={props.places}
                    renderItem={(info) => (
                        <HomeListItem
                            place={info}
                            onItemPressed={() => props.onItemSelected(info.item.key)}
                        />
                    )}
                    keyExtractor = { (info, index) => index.toString() }
                />
            </View>
        );
    }else {
        return (
            <View style={styles.noItemsView}>
                <Text style={styles.noItemsText}>No Items</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        margin: 10,
        flex: 1
    },
    listContainer: {
        width: "100%",
    },
    noItemsView: {
        flex: 1,
        padding: 20
    },
    noItemsText: {
        textAlign: "center"
    }
});

export default homePlaceList;
