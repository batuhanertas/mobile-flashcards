import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends Component {
    
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params
        
        return {
            title: deck
        }
    }

    render () {
        const { decks, navigation } = this.props
        const deckName = navigation.state.params.deck
        const deck = decks[deckName]
        
        return (
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.numberOfCards}>{deck.questions.length} Cards</Text>
                <TouchableOpacity style={styles.button} 
                onPress={() => this.props.navigation.navigate(
                    'AddCard',
                    { deck: deckName }
                )}>
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.startQuiz}>
                    <Text style={styles.btnText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        backgroundColor: '#20b71b',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 40,
    },
    btnText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
    deckTitle: {
        fontSize: 42
    },
    numberOfCards: {
        fontSize: 22,
        marginBottom: 40
    }
  });



function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckDetail)