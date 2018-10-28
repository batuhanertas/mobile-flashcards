import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';

class Score extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Score</Text>
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
        marginTop: 25,
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
    bigText: {
        marginTop: 25,
        fontSize: 32,
        textAlign: 'center',
    },
    smallText: {
        marginTop: 25,
        fontSize: 22,
        textAlign: 'center',
    },
  });

  function mapStateToProps (decks) {
    return {
      decks
    }
  }

export default connect(mapStateToProps)(Score)