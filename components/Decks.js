import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import DeckInfo from './DeckInfo'

class Decks extends Component {
    render () {
        return (
            <ScrollView style={styles.scrollView}>
            { Object.keys(decks).map( (deck) => (
                <TouchableOpacity 
                    key={deck}
                    onPress={() => this.props.navigation.navigate(
                    'DeckDetail',
                    { deck: deck }
                    )}>
                    <DeckInfo key={deck} deck={decks[deck]} />
                ></TouchableOpacity>
            ))}
            </ScrollView>
        )
    }
}


const decks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50
    }
  });

export default Decks