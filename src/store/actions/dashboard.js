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

export const taskDeleted = () => {
    return (dispatch, getState) => {
        dispatch((currentTask => {
            axios.delete(`https://scrumbot-c59e1.firebaseio.com/tasks/${currentTask.id}.json`);
            return {
                type: actionTypes.TASK_DELETED,
            }
        })(getState().dashboard.currentTask));
    }
}

export const taskSaved = () => {
    return (dispatch, getState) => {
        dispatch((currentTask => {
            axios.put(`https://scrumbot-c59e1.firebaseio.com/tasks/${currentTask.id}.json`, currentTask);
            return {
                type: actionTypes.TASK_SAVED,
            }
        })(getState().dashboard.currentTask));
    }
}

export const currentTaskChanged = task => {
    return {
        type: actionTypes.CURRENT_TASK_CHANGED,
        task: task
    }
}

export const tasksLoaded = tasks => {
    return {
        type: actionTypes.TASKS_LOADED,
        tasks: tasks
    }
}

export const fetchTasks = () => {
    return dispatch => {
        axios.get('https://scrumbot-c59e1.firebaseio.com/tasks.json')
            .then(response => {
                const tasksWithIds = Object.entries(response.data).map(([key, value]) => {
                    return {
                        ...value,
                        id: key
                    };
                });
                dispatch(tasksLoaded(tasksWithIds));
            })
    }
}

