import React, {Component} from "react";
import {FlatList, StyleSheet, View, Text} from "react-native";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

import ListItem from "../ListItem/ListItem";

class PlaceList extends Component {

    state = {
        search: ""
    };

    constructor(props) {
        super(props);
    }

    searchChangedHandler = (val) => {
        this.setState({
            search: val
        });
    };

    render() {
        if (this.props.places.length > 0) {
            return (
                <View style={styles.container}>
                    <DefaultInput
                        placeholder="Search Places"
                        value={this.state.search}
                        onChangeText={this.searchChangedHandler}
                    />
                    <FlatList
                        style={styles.listContainer}
                        data={this.props.places}
                        renderItem={(info) => (
                            <ListItem
                                placeName={info.item.name}
                                placeImage={info.item.image}
                                onItemPressed={() => this.props.onItemSelected(info.item.key)}
                            />
                        )}
                        keyExtractor = { (info, index) => index.toString() }
                    />
                </View>);
        }else {
            return (
                <View style={styles.noItemsView}>
                    <Text style={styles.noItemsText}>No Items</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
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

export default PlaceList;
