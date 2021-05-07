import * as React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "@react-navigation/stack/lib/typescript/src/views/Stack/Card";
import HTML from "react-native-render-html";
import {ScreenProps} from "react-native-screens";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";


export default function PostScreen({route}: ScreenProps) {
    const [postData, setPostData] = useState<any>({});
    const colorScheme = useColorScheme();

    const {id} = route.params;
    /*
        useEffect(() => {
            getData().then(postData => {
                setPostsData(postData || 'No data');
            });
        },[])
    */

    useEffect(() => {
        axios.get(`http://api.lemming.kz/post/read/${id}`)
            .then((res) => {
                // handle success
                setPostData(res.data.data);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }, [id])


    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    marginTop: 20,
                    marginHorizontal: 10,
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    display: 'flex',
                    borderRadius: 30,
                }}>
                    <View>
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: 15,
                        }}>{postData.title}</Text>
                        <View
                            style={{
                                marginVertical: 25
                            }}
                        >
                            <HTML
                                source={{
                                    html: `<img src="${postData.cover}" style="width: 100%; border-radius: 20px; overflow: hidden; display: block"/>`
                                }}/>
                        </View>


                        <HTML
                            baseFontStyle={{
                                color: Colors[colorScheme].text,
                            }}
                            source={{
                                html: postData.content
                            }}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
