import * as actionTypes from './actionTypes'
import axios from 'axios'

export const memberDeleted = () => {
    return (dispatch, getState) => {
        dispatch((member => {
            axios.delete(`https://scrumbot-c59e1.firebaseio.com/members/${member.id}.json`);
            return {
                type: actionTypes.MEMBER_DELETED,
                member: member
            }
        })(getState().team.currentMember));
    }
}

export const memberSaved = () => {
    return (dispatch, getState) => {
        dispatch((member => {
            axios.put(`https://scrumbot-c59e1.firebaseio.com/members/${member.id}.json`, member);
            return {
                type: actionTypes.MEMBER_SAVED,
                member: member
            }
        })(getState().team.currentMember));
    }
}

export const currentMemberChanged = member => {
    return {
        type: actionTypes.CURRENT_MEMBER_CHANGED,
        member: member
    }
}

export const membersLoaded = members => {
    return {
        type: actionTypes.MEMBERS_LOADED,
        members: members
    }
}

export const fetchMembers = () => {
    return dispatch => {
        axios.get('https://scrumbot-c59e1.firebaseio.com/members.json')
            .then(response => {
                const membersWithIds = Object.entries(response.data).map(([key, value]) => {
                    // to fix, this (below) is a workaround because I dont have time to change the way of
                    // storing values in db. 
                    let result;
                    result = value ? {
                        ...value,
                        id: key
                    } : null;
                    return result;
                });
                dispatch(membersLoaded(membersWithIds));
            })
    }
}
