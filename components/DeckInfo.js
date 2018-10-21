import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function DeckInfo ({ deck }) {
    return (
        <View style={styles.container}>
            <Text style={styles.deckTitle}>{deck.title}</Text>
            <Text style={styles.numberOfCards}>{deck.questions.length} Cards</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 25,
    },
    deckTitle: {
        fontSize: 42
    },
    numberOfCards: {
        fontSize: 22
    }
})
