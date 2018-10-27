import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS :
          return {
            ...state,
            ...action.decks,
          }
        case ADD_DECK :
          return {
            ...state,
            ...action.deck
          }
        case ADD_CARD:
          const { deck, card } = action
          const question = card.question
          const answer = card.answer

          return {
            ...state,
            [deck] : {
                ...state[deck],
                questions: state[deck].questions.concat({ question, answer })
            }
          }
        default :
            return state
  }
}

export default decks 