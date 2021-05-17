import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";

export default function NotificationScreen() {
    return (
        <View style={{
            margin: 10,
        }}>
            <View style={{
                marginTop: 10,
                marginHorizontal: 5,
                paddingVertical: 20,
                paddingHorizontal: 15,
                display: 'flex',
            }}>
                <View>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600'
                    }}
                    >
                      Stay up to date
                    </Text>
                    <Text
                        style={{
                            marginTop: 5,
                            fontSize: 15,
                        }}>
                        See updates from the people ypu follow and interact with you stories
                    </Text>
                </View>
            </View>
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
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
