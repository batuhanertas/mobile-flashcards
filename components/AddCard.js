import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    addCard = (deck) => {
        if (!this.state.question) {
            alert("Question cannot be empty!")
            return
        }

        if (!this.state.answer) {
            alert("Answer cannot be empty!")
            return
        }

        
    }

    render() {
        const { decks, navigation } = this.props
        const deckName = navigation.state.params.deck
        const deck = decks[deckName]

        return (
            <View style={styles.container}>
                <Text style={styles.label}>Question</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                <Text style={styles.label}>Answer</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <TouchableOpacity style={styles.button} onPress={(deck) => this.addCard(deck)}>
                    <Text style={styles.btnText}>Submit</Text>
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
      justifyContent: 'flex-start',
    },
    textInput: {
        height: 40, 
        borderColor: '#000', 
        borderWidth: 1,
        borderRadius: 7,
        width: 350
    },
    button: {
        marginTop: 25,
        backgroundColor: '#f26f28',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    btnText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
    label: {
        marginTop: 25,
        fontSize: 32,
        textAlign: 'center',
    }
  });

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(AddCard)