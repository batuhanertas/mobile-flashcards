import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export function createDeck ({ key, deck }) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [key]: deck
    }))
}

export function fetchDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(deckResults)
}


export function addNewCard (deckName, card) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(decks => JSON.parse(decks))
        .then(decks => {
            decks[deckName].questions = decks[deckName].questions.concat(card)
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
            return decks
        })
}

function deckResults(results) {
    return results === null
    ? setDummyData()
    : JSON.parse(results)
}

setDummyData = () => {
    const starterDecks = {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
              {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
              }
            ]
          }
    }

    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(starterDecks))
    return starterDecks
}
