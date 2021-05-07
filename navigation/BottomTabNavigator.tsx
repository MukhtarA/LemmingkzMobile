/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Ionicons, MaterialIcons, Octicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
    AddParamList,
    BottomTabParamList,
    HomeParamList, NotificationParamList, ProfileParamList,
    ReadingListParamList,
    TabOneParamList,
    TabTwoParamList
} from '../types';
import HomeScreen from "../screens/HomeScreen";
import ReadingListScreen from "../screens/ReadingListScreen";
import AddScreen from "../screens/AddScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
          activeTintColor: Colors[colorScheme].tint,
          labelStyle: {
              display: 'none',
          }
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Octicons name="home" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ReadingList"
        component={TabReadingListNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="library-add-check" size={24} color={color} />,
        }}
      />
        <BottomTab.Screen
            name="Add"
            component={TabAddNavigator}
            options={{
                tabBarIcon: ({ color }) => <MaterialIcons name="add-box" size={24} color={color} />,
            }}
        />
        <BottomTab.Screen
            name="Notification"
            component={TabNotificationNavigator}
            options={{
                tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
            }}
        />
        <BottomTab.Screen
            name="Profile"
            component={TabProfileNavigator}
            options={{
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-outline" size={24} color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function TabHomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: 'Your Daily Read' }}
            />
        </HomeStack.Navigator>
    );
}

const ReadingListStack = createStackNavigator<ReadingListParamList>();

function TabReadingListNavigator() {
    return (
        <ReadingListStack.Navigator>
            <ReadingListStack.Screen
                name="ReadingListScreen"
                component={ReadingListScreen}
                options={{ headerTitle: 'Reading list' }}
            />
        </ReadingListStack.Navigator>
    );
}

const AddStack = createStackNavigator<AddParamList>();

function TabAddNavigator() {
    return (
        <AddStack.Navigator>
            <AddStack.Screen
                name="AddScreen"
                component={AddScreen}
                options={{ headerTitle: 'Create' }}
            />
        </AddStack.Navigator>
    );
}

const NotificationStack = createStackNavigator<NotificationParamList>();

function TabNotificationNavigator() {
    return (
        <NotificationStack.Navigator>
            <NotificationStack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{ headerTitle: 'Activity' }}
            />
        </NotificationStack.Navigator>
    );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function TabProfileNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerTitle: 'You' }}
            />
        </ProfileStack.Navigator>
    );
}

