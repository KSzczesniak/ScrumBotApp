import * as actionTypes from '../actions/actionTypes'

const initialState = {
    persons: null,
    modalOpen: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PERSONS_LOADED: {
            return {
                ...state,
                persons: action.persons
            }
        }
        case actionTypes.MODAL_TOGGLED: {
            return {
                ...state,
                modalOpen: !state.modalOpen
            }
        }
        case actionTypes.SHOW_MODAL: {
            return {
                ...state,
                modalOpen: action.flag
            }
        }
        default: return { ...state };
    }
};

export default reducer;