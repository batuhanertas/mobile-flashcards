import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

class DeckDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params

        return {
            title: deck
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>DeckDetail</Text>
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
  });

export default DeckDetail