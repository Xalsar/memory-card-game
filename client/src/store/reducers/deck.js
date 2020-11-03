import _ from 'lodash'

const initialState = {
    firstChoice: {},
    secondChoice: {},
    error: false,
    show: true,
    startTime: 0,
    endTime: 0,
    continueGame: true,
    deck: [
        {
            id: 0,
            value: 1,
            color: '--light-yellow',
            found: false
        },
        {
            id: 1,
            value: 1,
            color: '--light-yellow',
            found: false
        },
        {
            id: 2,
            value: 2,
            color: '--light-pink',
            found: false
        },
        {
            id: 3,
            value: 2,
            color: '--light-pink',
            found: false
        },
        {
            id: 4,
            value: 3,
            color: '--light-blue',
            found: false
        },
        {
            id: 5,
            value: 3,
            color: '--light-blue',
            found: false
        },
        {
            id: 6,
            value: 4,
            color: '--light-green',
            found: false
        },
        {
            id: 7,
            value: 4,
            color: '--light-green',
            found: false
        }
    ]
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const setGame = (state) => {
    const deck = [
        { ...initialState.deck[0] },
        { ...initialState.deck[1] },
        { ...initialState.deck[2] },
        { ...initialState.deck[3] },
        { ...initialState.deck[4] },
        { ...initialState.deck[5] },
        { ...initialState.deck[6] },
        { ...initialState.deck[7] },
    ]

    shuffleArray(deck)

    return {
        ...initialState,
        startTime: state.startTime,
        deck
    }
}

const setGameAndTimer = (state) => {
    const deck = [
        { ...initialState.deck[0] },
        { ...initialState.deck[1] },
        { ...initialState.deck[2] },
        { ...initialState.deck[3] },
        { ...initialState.deck[4] },
        { ...initialState.deck[5] },
        { ...initialState.deck[6] },
        { ...initialState.deck[7] },
    ]

    shuffleArray(deck)

    return {
        ...initialState,
        deck,
        startTime: new Date().getTime()
    }
}

const pick = (state, id) => {
    let updatedDeck = [
        { ...state.deck[0] },
        { ...state.deck[1] },
        { ...state.deck[2] },
        { ...state.deck[3] },
        { ...state.deck[4] },
        { ...state.deck[5] },
        { ...state.deck[6] },
        { ...state.deck[7] },
    ]

    /*
    
    How system works?

    When user picks a card:
    1- Has the user picked the first card? If no select it
    2- Has the user picked the second card? If no select it
    3- Have both cards been selected?
    4- If they form a pair, set them as found and continue game
    5- If all pairs have been found, set finish time and finish game
    5- If they do not form a pair, set error and reset (see also Desk container)

    */

    const card = updatedDeck.find((c) => c.id === id)
    const value = card.value

    let firstChoice = { ...state.firstChoice }
    let secondChoice = { ...state.secondChoice }
    let error = false
    let endTime = 0
    let continueGame = state.continueGame

    if (_.isEmpty(firstChoice)) {
        // 1
        firstChoice = card
    } else if (firstChoice.id !== card.id) {
        // 2
        secondChoice = card
    }

    // 3
    if (
        !_.isEmpty(firstChoice) &&
        !_.isEmpty(secondChoice)
    ) {
        if (firstChoice.value === secondChoice.value) {
            // 4
            updatedDeck = updatedDeck.map((c) => {
                if (c.value === value) {
                    return {
                        ...c,
                        found: true
                    }
                }

                return c
            })

            // 5
            const doesGameContinue = updatedDeck.some((card) => !card.found)
            if (!doesGameContinue) {
                endTime = new Date().getTime()
                continueGame = false
            }

            firstChoice = {}
            secondChoice = {}
        } else {
            // 6
            error = true
        }
    }



    return {
        ...state,
        deck: updatedDeck,
        firstChoice,
        secondChoice,
        error,
        endTime,
        continueGame
    }
}

const hide = (state) => {
    return {
        ...state,
        show: false
    }
}

const restart = (state) => {
    return {
        ...state,
        continueGame: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_GAME': return setGame(state)

        case 'SET_GAME_AND_TIMER': return setGameAndTimer(state)

        case 'PICK': return pick(state, action.payload)

        case 'HIDE': return hide(state)

        case 'RESTART': return restart(state)

        default:
            return state
    }
}

export default reducer