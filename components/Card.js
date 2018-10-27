import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

class Card extends Component {
    state = {
        correct: 0,
        incorrect: 0,
        questions: this.props.navigation.state.params.deck.questions,
        numberOfQuestions: this.props.navigation.state.params.deck.questions.length,
        showAnswer: false,
    }

    answerQuestion = (correct) => {
        if (correct) {
            numberOfCorrect = this.state.correct
            this.setState({
                correct: numberOfCorrect + 1
            })
        } else {
            numberOfIncorrect = this.state.incorrect
            this.setState({
                incorrect: numberOfIncorrect + 1
            })
        }

        questions = this.state.questions
        questions.shift()
        
        this.setState({
            questions: questions,
            numberOfQuestions: questions.length,
            showAnswer: false
        })
    }

    showAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }

    render() {
        let numberOfCards = this.props.navigation.state.params.deck.questions.length
        return (
            <View style={styles.container}>
                {numberOfCards === 0
                ? <Text style={styles.info}>
                    Sorry, you cannot take this quiz, 
                    because there are no cards in the deck.
                  </Text> 
                : <View>
                    <Text style={styles.question}>
                        {this.state.questions[0].question}
                    </Text>
                    { !this.state.showAnswer
                        ? <Text style={styles.showAnswer} onPress={this.showAnswer}>
                            Show Answer
                          </Text>
                        : <Text style={styles.showAnswer}>{this.state.questions[0].answer}</Text>
                    }
                    <TouchableOpacity style={[styles.button, styles.correctButton]} 
                        onPress={() => this.answerQuestion(true)}>
                        <Text style={styles.submitBtnText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.incorrectButton]} 
                        onPress={() => this.answerQuestion(false)}>
                        <Text style={styles.submitBtnText}>Incorrect</Text>
                    </TouchableOpacity>
                  </View>
                }
                
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
        marginTop: 25,
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
    correctButton: {
        backgroundColor: '#20b71b',
        marginTop: 140
    },
    incorrectButton: {
        backgroundColor: '#e51e04',
    },
    question: {
        marginTop: 25,
        fontSize: 32,
        textAlign: 'center',
    },
    info: {
        marginTop: 25,
        fontSize: 22,
        textAlign: 'center',
    },
    showAnswer: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 25
    }
  });

export default Card