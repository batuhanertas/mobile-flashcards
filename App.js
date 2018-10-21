import React from 'react'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import DeckDetail from './components/DeckDetail'

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
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


const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f26f28',
      },
    }),
  },
});