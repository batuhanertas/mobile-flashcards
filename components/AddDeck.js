import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class AddDeck extends Component {
    state = {
        text: '',
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>What is the title of your deck?</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <TouchableOpacity style={styles.button}>
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
        width: 150
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

export default AddDeck