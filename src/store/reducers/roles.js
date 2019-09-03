import * as actionTypes from '../actions/actionTypes'

const initialState = {
    poRef: null,
    smRef: null,
    devRef: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PO_REF:
            return {
                ...state,
                poRef: action.ref
            }
        case actionTypes.SET_SM_REF:
            return {
                ...state,
                smRef: action.ref
            }
        case actionTypes.SET_DEV_REF:
            return {
                ...state,
                devRef: action.ref
            }
        default: return state;
    }
}

export default reducer;