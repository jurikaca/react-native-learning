import React from "react";
import {FlatList, StyleSheet, View, Text} from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = props => {
    if (props.places.length > 0) {
        return (
            <FlatList
                style={styles.listContainer}
                data={props.places}
                renderItem={(info) => (
                    <ListItem
                        placeName={info.item.name}
                        placeImage={info.item.image}
                        onItemPressed={() => props.onItemSelected(info.item.key)}
                    />
                )}
            />
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
    listContainer: {
        width: "100%"
    },
    noItemsView: {
        flex: 1,
        padding: 20
    },
    noItemsText: {
        textAlign: "center"
    }
});

export default placeList;
