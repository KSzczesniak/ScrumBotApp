import * as actionTypes from '../actions/actionTypes'
import { defaultMember } from '../../compoments/Team/utility'

const initialState = {
    members: null,
    currentMember: defaultMember,
    modalOpen: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MEMBERS_LOADED: {
            return {
                ...state,
                members: action.members
            }
        }
        case actionTypes.CURRENT_MEMBER_CHANGED: {
            return {
                ...state,
                currentMember: action.member
            }
        }
        case actionTypes.MEMBER_DELETED: {
            return {
                ...state,
                members: state.members.filter(el => el.id !== action.member.id)
            }
        }
        case actionTypes.MEMBER_SAVED: {
            const id = parseInt(Object.values(state.members)[state.members.length - 1].id) + 1;
            const copiedMembers = [...state.members];
            const indexOfMember = copiedMembers.findIndex(member => member.id === action.member.id);
            indexOfMember !== -1 ? copiedMembers.splice(indexOfMember, 1, action.member) : copiedMembers.push({ ...action.member, id: id })
            return {
                ...state,
                members: copiedMembers
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