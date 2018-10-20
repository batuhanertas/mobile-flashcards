import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='logo-buffer' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'AddDeck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle-outline' size={30} color={tintColor} />
    },
  },
});
