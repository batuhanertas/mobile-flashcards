import React from 'react'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Card from './components/Card'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import DeckDetail from './components/DeckDetail'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/helper'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <MainNavigator />
      </Provider>
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
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f26f28',
      },
      title: 'Add Card'
    }),
  },
  Card: {
    screen: Card,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f26f28',
      },
    }),
  },
});