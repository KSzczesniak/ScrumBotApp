import * as actionTypes from '../actions/actionTypes'

const initialState = {
    sprintRef: null,
    sprintPlanningRef: null,
    sprintReviewRef: null,
    dailyScrumRef: null,
    sprintRetrostectiveRef: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SPRINT_RETRO_REF_SET:
            return{
                ...state,
                sprintRetrostectiveRef: action.ref
            }
        default: return state;
    }
}

export default reducer;