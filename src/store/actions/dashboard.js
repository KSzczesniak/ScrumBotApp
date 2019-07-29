import * as actionTypes from './actionTypes'
import axios from 'axios'

export const taskDeleted = task => {
    axios.delete(`https://scrumbot-c59e1.firebaseio.com/tasks/${task.id}.json`);    
    return {
        type: actionTypes.TASK_DELETED,
        task: task
    }
}

export const taskSaved = task => {
    axios.put(`https://scrumbot-c59e1.firebaseio.com/tasks/${task.id}.json`, task);
    return {
        type: actionTypes.TASK_SAVED,
        task: task
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
        // const id = parseInt(Object.keys(tasksWithIds)[tasksWithIds.length - 1]) + 1;
        // this.setState(prevState => {
        //     return {
        //         currentTask: {
        //             ...prevState.currentTask,
        //             id: id
        //         }
        //     }
        // });
        }
    }

