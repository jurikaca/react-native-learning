import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View, Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from "react-native-maps";

const homeListItem = props => (
    <View style={styles.listItem}>
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listPlaceContent}>
                <View>
                    <MapView
                        initialRegion={{
                            ...props.place.item.location,
                            latitudeDelta: 0.0122,
                            longitudeDelta:
                            Dimensions.get("window").width /
                            Dimensions.get("window").height *
                            0.0122
                        }}
                        style={styles.placeMap}
                    >
                        <MapView.Marker coordinate={props.place.item.location} />
                    </MapView>
                </View>

                <View style={styles.listContent}>
                    <View style={styles.listHeader}>
                        <Image resizeMode="cover" source={props.place.item.image} style={styles.placeImage}/>
                        <Text style={styles.listTitle}>{props.place.item.name}</Text>
                    </View>
                    <Text style={styles.listDesc}>{props.place.item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
        <View style={styles.listInfo}>
            <TouchableOpacity>
                <Text style={styles.listLikes}>{props.place.item.numLikes} likes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.listComments}>{props.place.item.numComments} comments</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.listActions}>
            <TouchableOpacity>
                <Icon name="thumbs-up" style={styles.likeBtn}></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="comment" style={styles.commentBtn}></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="share" style={styles.shareBtn}></Icon>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderWidth: 1,
        borderColor: "#d8d8d8"
    },
    listPlaceContent: {
        flex: 2,
        flexDirection: "row"
    },
    placeMap: {
        marginRight: 8,
        height: 100,
        width: 100
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    },
    listContent: {
        flex: 1
    },
    listHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    listTitle: {
        flex: 1,
        fontSize: 16,
        color: "#555"
    },
    listDesc: {
        marginTop: 5
    },
    listInfo: {
        flex: 2,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 15
    },
    listComments: {
        textAlign: "right",
        color: "#1c9fee"
    },
    listLikes: {
        color: "#1c9fee"
    },
    listActions: {
        flex: 3,
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: "#E0E0E0",
        marginTop: 10,
        paddingTop: 10
    },
    likeBtn: {
        fontSize: 25
    },
    shareBtn: {
        fontSize: 25,
        marginLeft: 15
    },
    commentBtn: {
        fontSize: 25,
        marginLeft: 15
    }
});

export default homeListItem;
