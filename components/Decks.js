import React, { Component } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import DeckInfo from './DeckInfo'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { connect } from 'react-redux'

class Decks extends Component {
    state = {
      ready: false,
    }

    componentDidMount () {
      const { dispatch } = this.props

      fetchDecks().then((decks) => dispatch(receiveDecks(decks)))
      debugger
    }

    render () {
      const { decks } = this.props
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

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)