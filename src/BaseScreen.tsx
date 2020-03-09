import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {BaseScreenRouteProp, BaseScreenNavigationProp, AppScreen} from './App';

const style = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 24,
    }
});

export const BaseScreen: React.FC = () => {
    const route = useRoute<BaseScreenRouteProp>();
    const navigation = useNavigation<BaseScreenNavigationProp>();

    const onPress = (): void => {
        if (route.name === AppScreen.Home) {
            navigation.navigate(AppScreen.Settings);
        } else {
            navigation.goBack();
        }
    };

    return (
        <View style={style.view}>
            <Text style={style.text} onPress={onPress}>{route.params.text}</Text>
        </View>
    );
};
