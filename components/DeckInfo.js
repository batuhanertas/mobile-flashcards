import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function DeckInfo ({ deck }) {
    return (
        <View style={styles.container}>
            <Text>{deck.title}</Text>
            <Text>{deck.questions.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
})
