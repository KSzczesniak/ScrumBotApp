import * as actionTypes from '../actions/actionTypes'
import { defaultMember } from '../../compoments/Team/utility'

const initialState = {
    members: null,
    currentMember: defaultMember,
    modalOpen: false,
    roleFilter: 'All'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MEMBERS_LOADED: {
            return {
                ...state,
                // WORKAROUND , to be fixed - see commit 23ac5882aed5975f493acc016109b1b27769bb14 
                members: action.members.filter(member => member)
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
        case actionTypes.SHOW_MEMBER_MODAL: {
            return {
                ...state,
                modalOpen: action.flag
            }
        }
        case actionTypes.ROLE_FILTER_CHANGED: {
            return {
                ...state,
                roleFilter: action.roleFilter
            }
        }
        default: return { ...state };
    }
};

export default reducer;