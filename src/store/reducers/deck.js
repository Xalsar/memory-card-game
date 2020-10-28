import _ from 'lodash'

const initialState = {
    firstChoice: {},
    secondChoice: {},
    deck: [
        {
            id: 0,
            value: 1,
            color: '--light-orange',
            found: false
        },
        {
            id: 1,
            value: 1,
            color: '--light-orange',
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHUFFLE':
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            const deck = [
                { ...state.deck[0] },
                { ...state.deck[1] },
                { ...state.deck[2] },
                { ...state.deck[3] },
                { ...state.deck[4] },
                { ...state.deck[5] },
                { ...state.deck[6] },
                { ...state.deck[7] },
            ]


            shuffleArray(deck)

            return {
                ...state,
                deck
            }

        case 'PICK':
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

            const id = action.payload
            const card = updatedDeck.find((c) => c.id === id)
            const value = card.value

            let firstChoice = { ...state.firstChoice }
            let secondChoice = { ...state.secondChoice }

            if (_.isEmpty(firstChoice)) {
                firstChoice = card
            } else if (firstChoice.id !== card.id) {
                secondChoice = card
            }

            if (
                !_.isEmpty(firstChoice) &&
                !_.isEmpty(secondChoice)
            ) {
                if (firstChoice.value === secondChoice.value) {
                    updatedDeck = updatedDeck.map((c) => {
                        if (c.value === value) {
                            return {
                                ...c,
                                found: true
                            }
                        }

                        return c
                    })
                }

                firstChoice = {}
                secondChoice = {}
            }

            return {
                ...state,
                deck: updatedDeck,
                firstChoice,
                secondChoice
            }

        default:
            return state
    }
}

export default reducer