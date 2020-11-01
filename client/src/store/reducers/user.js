const initalState = {
    name: ''
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            }

        default:
            return state
    }
}

export default reducer