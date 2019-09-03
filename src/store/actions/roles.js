import * as actionTypes from './actionTypes'

export const setPoRef = ref => {
    return {
        type: actionTypes.SET_PO_REF,
        ref: ref
    }
}
export const setSmRef = ref => {
    return {
        type: actionTypes.SET_SM_REF,
        ref: ref
    }
}
export const setDevRef = ref => {
    return {
        type: actionTypes.SET_DEV_REF,
        ref: ref
    }
}
