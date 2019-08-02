import * as actionTypes from '../actions/actionTypes'
import { defaultTask } from '../../compoments/Dashboard/utility'

const initialState = {
    tasks: null,
    currentTask: defaultTask,
    modalOpen: false
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
            console.log('dupa');
            return {
                ...state,
                tasks: state.tasks.filter(el => el.id !== state.currentTask.id)
            }
        }
        case actionTypes.TASK_SAVED: {
            const id = parseInt(Object.values(state.tasks)[state.tasks.length - 1].id) + 1;
            const copiedTasks = [...state.tasks];
            const indexOfTask = copiedTasks.findIndex(task => task.id === state.currentTask.id);
            indexOfTask !== -1 ? copiedTasks.splice(indexOfTask, 1, state.currentTask) : copiedTasks.push({ ...state.currentTask, id: id })
            return {
                ...state,
                tasks: copiedTasks
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