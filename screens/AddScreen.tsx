import * as React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import Colors from "../constants/Colors";

export default function AddScreen() {
    return (
        <View>
            <Image style={{
                marginLeft: 100,
                width: 200,
                height: 200,
                resizeMode: "contain",
                justifyContent: "center",
            }} source={require('../assets/img/typewriter.png')} />
            <View style={{
                marginTop: 20,
                marginHorizontal: 5,
                paddingVertical: 20,
                paddingHorizontal: 15,
                display: 'flex',
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: '600',
                }}
                      onPress={() => {
                          console.log('lol')
                      }}
                >
                    Write a story
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
        container: {
            display: "flex",
        },
        typewriterBlock: {},
        typewriter: {
            maxWidth: 200,
            resizeMode: "contain",
        },
        createButton: {
            backgroundColor: '#ae2828',
            color: '#fff',
            flexDirection: 'row',
        }
    })
;
