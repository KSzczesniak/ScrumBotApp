import * as actionTypes from './actionTypes'
import axios from 'axios'

export const modalToggled = () => {
    return {
        type: actionTypes.MODAL_TOGGLED
    }
}

export const showModal = flag => {
    return {
        type: actionTypes.SHOW_MODAL,
        flag: flag
    }
}

export const memberDeleted = task => {
    axios.delete(`https://scrumbot-c59e1.firebaseio.com/tasks/${task.id}.json`);
    return {
        type: actionTypes.TASK_DELETED,
        task: task
    }
}

export const memberSaved = task => {
    axios.put(`https://scrumbot-c59e1.firebaseio.com/tasks/${task.id}.json`, task);
    return {
        type: actionTypes.TASK_SAVED,
        task: task
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
