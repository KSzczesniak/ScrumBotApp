import * as actionTypes from '../actions/actionTypes'

export const scrollToRef = ref => {
    return dispatch => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        dispatch(() => {
            return null;
        })
    }
}

export const sprintRetroRefSet = ref => {
    return {
        type: actionTypes.SPRINT_RETRO_REF_SET,
        ref: ref
    }
}