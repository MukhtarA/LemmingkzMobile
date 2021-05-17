import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function SavedScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>You haven't anything yet</Text>
        </View>
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
        fontWeight: '600',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
