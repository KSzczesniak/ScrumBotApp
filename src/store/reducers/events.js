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
        case actionTypes.SET_SPRINT_REF:
            return {
                ...state,
                sprintRef: action.ref
            }
        case actionTypes.SET_SPRINT_PLANNING_REF:
            return {
                ...state,
                sprintPlanningRef: action.ref
            }
        case actionTypes.SET_SPRINT_REVIEW_REF:
            return {
                ...state,
                sprintReviewRef: action.ref
            }
        case actionTypes.SET_DAILY_SCRUM_REF:
            return {
                ...state,
                dailyScrumRef: action.ref
            }
        case actionTypes.SET_SPRINT_RETRO_REF:
            return {
                ...state,
                sprintRetrostectiveRef: action.ref
            }
        default: return state;
    }
}

export default reducer;