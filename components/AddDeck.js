import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { createDeck } from '../utils/api'
import { addDeck } from '../actions'
import { connect } from 'react-redux'



class AddDeck extends Component {
    create = (decks) => {
        const key = this.state.text;

        if (!key) {
            alert("Deck title cannot be empty!")
            return
        }

        if (Object.keys(decks).indexOf(key) > -1) {
            alert('Deck already exists!')
            return
        }
    
        const deck = {
            title: key,
            questions: []
        }
        
        this.props.dispatch(addDeck({
            [key]: deck
        }))
    
        createDeck({ key, deck })

        this.setState({
            text: ''
        })

        this.props.navigation.navigate('DeckDetail',{ deck: key })
    }

    state = {
        text: '',
    }
    render () {
        const { decks } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.question}>What is the title of your deck?</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.create(decks)}>
                    <Text style={styles.submitBtnText}>Create Deck</Text>
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
    textInput: {
        marginTop: 25,
        height: 40, 
        borderColor: '#000', 
        borderWidth: 1,
        borderRadius: 7,
        width: 250
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
    submitBtnText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
    question: {
        fontSize: 32,
        textAlign: 'center',
    }
  });

  function mapStateToProps (decks) {
    return {
      decks
    }
  }

export default connect(mapStateToProps)(AddDeck)