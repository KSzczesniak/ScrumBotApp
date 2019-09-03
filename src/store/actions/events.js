import * as actionTypes from '../actions/actionTypes'

export const setSprintRef = ref => {
    return {
        type: actionTypes.SET_SPRINT_REF,
        ref: ref
    }
}
export const setSprintPlanningRef = ref => {
    return {
        type: actionTypes.SET_SPRINT_PLANNING_REF,
        ref: ref
    }
}
export const setSprintReviewRef = ref => {
    return {
        type: actionTypes.SET_SPRINT_REVIEW_REF,
        ref: ref
    }
}
export const setDailyScrumRef = ref => {
    return {
        type: actionTypes.SET_DAILY_SCRUM_REF,
        ref: ref
    }
}
export const setSprintRetroRef = ref => {
    return {
        type: actionTypes.SET_SPRINT_RETRO_REF,
        ref: ref
    }
}

