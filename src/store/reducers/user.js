const initalState = {
    name: ''
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            console.log(action.name)
            return {
                ...state,
                name: action.name
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer