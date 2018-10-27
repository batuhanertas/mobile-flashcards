import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DeckInfo from './DeckInfo'

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
                <DeckInfo key={deck} deck={deck} />
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

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckDetail)