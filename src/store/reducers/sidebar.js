import * as actionTypes from '../actions/actionTypes'

const initialState = {
    open: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIDEBAR_TOGGLE: {
            return {
                ...state,
                open: !state.open
            }
        }
        default: return state;
    }
}

export default reducer;