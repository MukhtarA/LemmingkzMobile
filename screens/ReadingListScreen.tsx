import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NotificationScreen from "./NotificationScreen";
import NotFoundScreen from "./NotFoundScreen";
import HomeScreen from "./HomeScreen";
import SavedScreen from "./SavedScreen";

export default function ReadingListScreen() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Saved" component={SavedScreen} />
            <Tab.Screen name="Archives" component={SavedScreen} />
            <Tab.Screen name="Recently viewed" component={HomeScreen} />
            <Tab.Screen name="Highlighted" component={SavedScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
