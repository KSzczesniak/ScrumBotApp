import * as actionTypes from '../actions/actionTypes';

const initialState = {

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.type: { return null }
        default: return state;
    }
}

export default reducer;