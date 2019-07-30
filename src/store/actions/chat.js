import * as actionTypes from './actionTypes'
import axios from 'axios'
import {defaultTask} from '../../compoments/Dashboard/utility'
import * as actions from './index'

export const messageSent = message => {
    return {
        type: actionTypes.MESSAGE_SENT,
        message: message
    }
}

export const responseShown = conversation => {
    return {
        type: actionTypes.RESPONSE_RECEIVED,
        conversation: conversation
    }
}

export const responseReceived = conversation => {
    return dispatch => {
        if (conversation.state===5) {
            dispatch(actions.taskSaved({
                ...defaultTask,
                assignee: conversation.params.PERSON,
                type: conversation.params.TASK,
                estimation: conversation.params.UOM
            }));
        }
        console.log(conversation.params.UOM)
        dispatch(responseShown(conversation));
    }
    
}

export const processMessage = message => {
    return (dispatch, getState) => {
        dispatch(messageSent(message));
        const { chat: { conversation } } = getState();
        const json = {
            message: conversation.currentMessage,
            state: conversation.state,
            params: conversation.params,
            suggestion: conversation.suggestion,
            excluded: conversation.excluded
        };
        axios.post('https://scrum-bot.azurewebsites.net/chat', json)
            .then(response => {
                dispatch(responseReceived(response.data))
            });

    }
}
