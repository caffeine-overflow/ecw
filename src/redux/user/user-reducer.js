const INITIAL_STATE = {
    currentUser: null //initilize the state
}

const userReducer = (state = INITIAL_STATE, action) => {//passsing default value es6

    switch (action.type) {
        case 'SET_CURRENT_USER': return { ...state, currentUser: action.payload }
        default: return state
    }
}

export default userReducer;