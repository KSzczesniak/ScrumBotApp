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
            return {
                ...state,
                tasks: state.tasks.concat(action.task)
            }
        }
        default: return { ...state };
    }
};

export default reducer;