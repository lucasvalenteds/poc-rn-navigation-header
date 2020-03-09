import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const style = StyleSheet.create({
    header: {
        width: "100%",
        padding: 16,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        borderBottomWidth: 1,
        borderBottomColor: "#00000044",
    },
    tiles: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftTile: {
        width: 24,
        height: 24,
    },
    centerTile: {
        fontSize: 24,
    },
    rightTile: {
        width: 24,
        height: 24,
    },
});

export interface CustomHeaderProps {
    title: string;
    onPressLeftTile(): void;
    onPressRightTile(): void;
}

export const CustomHeader: React.FC<CustomHeaderProps> = (props) => {
    return (
        <View style={style.header}>
            <View style={style.tiles}>
                <TouchableNativeFeedback onPress={props.onPressLeftTile}>
                    <Image
                      style={style.leftTile}
                      source={require('./icons/baseline_menu_black_24.png')}
                    />
                </TouchableNativeFeedback>
                <Text style={style.centerTile}>{props.title}</Text>
                <TouchableNativeFeedback onPress={props.onPressRightTile}>
                    <Image
                      style={style.rightTile}
                      source={require('./icons/baseline_more_vert_black_24.png')}
                    />
                </TouchableNativeFeedback>
            </View>
        </View>
    );
}
