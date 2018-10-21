import { AsyncStorage } from 'react-native'
import DECKS_STORAGE_KEY from './_deck'

export function createDeck ({ key, deck }) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [key]: deck
    }))
}

export function fetchDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}