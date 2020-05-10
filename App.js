import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './src/Explore'
import Saved from './src/Saved'
import Inbox from './src/Inbox'
import Trips from './src/Trips'
import TelaP from './src/TelaP'
export default createBottomTabNavigator({
  Explore: {
    screen:Explore ,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search-outline" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'Favoritos',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart-outline" color={tintColor} size={24} />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'Viagens',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/logo.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Inbox: {
    screen: TelaP,
    navigationOptions: {
      tabBarLabel: 'Suporte',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'Logar',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person-outline" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })


