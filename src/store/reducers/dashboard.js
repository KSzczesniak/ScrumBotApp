import * as actionTypes from '../actions/actionTypes'
import { defaultTask } from '../../compoments/Dashboard/utility'

const initialState = {
    tasks: [],
    currentTask: defaultTask
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TASKS_LOADED: {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        case actionTypes.CURRENT_TASK_CHANGED: {
            return {
                ...state,
                currentTask: action.task
            }
        }
        case actionTypes.TASK_DELETED: {
            return {
                ...state,
                tasks: state.tasks.filter(el => el.id !== action.task.id)
            }
        }
        case actionTypes.TASK_SAVED: {
            const copiedTasks = [...state.tasks];
            const indexOfTask = copiedTasks.findIndex(task => task.id === action.task.id);
            console.log(indexOfTask)
            indexOfTask !== -1 ? copiedTasks.splice(indexOfTask, 1, action.task) : copiedTasks.push(action.task)
            console.log(action.task)
            console.log(copiedTasks)
            
            return {
                ...state,
                tasks: copiedTasks
            }
        }
        default: return { ...state };
    }
};

export default reducer;