import * as React from 'react';
import {Image, ScrollView, StyleSheet, Touchable} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "@react-navigation/stack/lib/typescript/src/views/Stack/Card";
import HTML from "react-native-render-html";
import Colors from '../constants/Colors';
import useColorScheme from "../hooks/useColorScheme";
import { useNavigation } from '@react-navigation/native';

/*const getData = async () => {
    return axios.get('http://api.lemming.kz/posts')
        .then((res) => {
            // handle success
            console.log();
            return JSON.stringify(res);
        })
        .catch(error => {
            // handle error
            console.log(error);
        })
        .then(() => {
            // always executed
        });*/

export default function HomeScreen() {
    const [postsData, setPostsData] = useState<ReadonlyArray<any>>([]);
    const [postsIsOpen, setPostIsOpen] = useState<ReadonlyArray<boolean>>([]);
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    /*
        useEffect(() => {
            getData().then(postData => {
                setPostsData(postData || 'No data');
            });
        },[])
    */



    useEffect(() => {
        axios.get('http://api.lemming.kz/posts')
            .then((res) => {
                // handle success
                setPostsData(res.data.data || []);
                setPostIsOpen(res.data.data.map(() => false));
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }, [])

    const onPressPost = (id: number) => {
        navigation.navigate('Post', { id: id })
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
{/*            <Text style={{
                fontSize: 30,
                fontWeight: "600",
                fontStyle: "normal",
                letterSpacing: -0.05,
                textAlign: 'center',
                marginTop: 5,
            }}>Your Daily Read</Text>*/}
            {postsData.map((n, i) => {
                return (
                    <View style={{
                        marginTop: 20,
                        marginHorizontal: 5,
                        paddingVertical: 20,
                        paddingHorizontal: 15,
                        display: 'flex',
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: '800'
                            }}
                                  onPress={() => onPressPost(n?.id)}
                            >
                                {n?.title}
                            </Text>
                            <Text
                                style={{
                                    color: Colors[colorScheme].text,
                                    marginTop: 5,
                                    fontSize: 15,
                                }}>
                                {postsIsOpen[i] ? n?.description : n?.description.slice(0, 60)}...
                                <Text
                                    style={{
                                        color: Colors[colorScheme].tint,
                                    }}
                                    onPress={() => {
                                        setPostIsOpen(prev => prev.map((m, key) => key === i ? !m : m));
                                    }}
                                >{postsIsOpen[i] ? ' Свернуть' : ' Развернуть'}</Text>
                            </Text>
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    );
}

