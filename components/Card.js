import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/helper'


class Card extends Component {
    state = {
        correct: 0,
        incorrect: 0,
        questions: this.props.navigation.state.params.deck.questions,
        numberOfQuestions: this.props.navigation.state.params.deck.questions.length,
        showAnswer: false,
        index: 0
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

        let index = this.state.index
        this.setState({
            index: index + 1,
            showAnswer: false
        })

        if (this.state.numberOfQuestions === (this.state.correct + this.state.incorrect)) {
            clearLocalNotification()
                .then(setLocalNotification)
        }
    }

    showAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }

    restartQuiz = () => {
        this.setState({
            correct: 0,
            incorrect: 0,
            index: 0
        })
    }

    toHome = () => {
        this.props.navigation.dispatch(NavigationActions.back())
      }

    render() {
        return (
            <View style={styles.container}>
                { this.state.numberOfQuestions === 0
                ? <Text style={styles.info}>
                    Sorry, you cannot take this quiz, 
                    because there are no cards in the deck.
                  </Text> 
                : <View>
                    { this.state.numberOfQuestions === (this.state.correct + this.state.incorrect)
                        ?  <View>
                                <Text style={styles.question}>Score</Text>
                                <Text style={styles.info}>Correct: {this.state.correct}</Text>
                                <Text style={styles.info}>Incorrect: {this.state.incorrect}</Text>
                                <TouchableOpacity style={[styles.button, styles.correctButton]}
                                    onPress={this.restartQuiz}>
                                    <Text style={styles.btnText}>Restart Quiz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.goBackButton]}
                                    onPress={this.toHome}>
                                    <Text style={styles.btnText}>Back to Deck</Text>
                                </TouchableOpacity>
                           </View>
                        :  <View>
                                <Text style={styles.question}>
                                    {this.state.questions[this.state.index].question}
                                </Text>
                                { !this.state.showAnswer
                                    ? <Text style={styles.showAnswer} onPress={this.showAnswer}>
                                        Show Answer
                                      </Text>
                                    : <Text style={styles.showAnswer}>{this.state.questions[this.state.index].answer}</Text>
                                }
                                <Text style={styles.remainingQuestions}>
                                    Number of remaining questions: 
                                    {this.state.numberOfQuestions - (this.state.correct + this.state.incorrect)}
                                </Text>
                                <TouchableOpacity style={[styles.button, styles.correctButton]} 
                                    onPress={() => this.answerQuestion(true)}>
                                    <Text style={styles.btnText}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.incorrectButton]} 
                                    onPress={() => this.answerQuestion(false)}>
                                    <Text style={styles.btnText}>Incorrect</Text>
                                </TouchableOpacity>
                            </View>
                    }
                    
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
    btnText: {
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
    goBackButton: {
        marginTop: 25,
        backgroundColor: '#f26f28',
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
    },
    remainingQuestions: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 25
    }
  });

export default Card