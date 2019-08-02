import * as actionTypes from './actionTypes'
import axios from 'axios'

export const memberDeleted = task => {
    return (dispatch, getState) => {
        dispatch((member => {
            axios.delete(`https://scrumbot-c59e1.firebaseio.com/tasks/${member.id}.json`);
            return {
                type: actionTypes.TASK_DELETED,
                task: task
            }
        })(getState().team.currentMember));
    }
}

export const memberSaved = task => {
    return (dispatch, getState) => {
        dispatch((member => {
            axios.put(`https://scrumbot-c59e1.firebaseio.com/tasks/${member.id}.json`, member);
            return {
                type: actionTypes.TASK_SAVED,
                task: task
            }
        })(getState().team.currentMember));
    }
}

export const currentMemberChanged = task => {
    return {
        type: actionTypes.CURRENT_TASK_CHANGED,
        task: task
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
                    return {
                        ...value,
                        id: key
                    };
                });
                dispatch(membersLoaded(membersWithIds));
            })
    }
}
