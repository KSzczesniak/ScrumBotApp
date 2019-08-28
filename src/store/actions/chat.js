import * as actionTypes from './actionTypes';
import axios from 'axios';
import { defaultTask } from '../../compoments/Dashboard/utility';
import * as actions from './index';

export const messageSent = message => {
    return {
        type: actionTypes.MESSAGE_SENT,
        message: message
    }
};

export const responseShown = conversation => {
    return {
        type: actionTypes.RESPONSE_RECEIVED,
        conversation: conversation
    }
};

export const link = () => {
    return {
        type: actionTypes.LINK,
    }
};

export const responseReceived = conversation => {
    return dispatch => {
        let currentTask;
        if (conversation.state === 2) {
            dispatch(actions.showModal(true));
        }
        if (conversation.state >= 2) {
            currentTask = {
                ...defaultTask,
                type: conversation.params.TASK,
                assignee: conversation.params.PERSON,
                estimation: conversation.params.UOM
            };
            dispatch(actions.currentTaskChanged(currentTask));
        }
        if (conversation.state === 5) {
            dispatch(actions.taskSaved(currentTask));
            dispatch(actions.showModal(false));
        }
        dispatch(responseShown(conversation));
    }
};

export const processMessage = message => {

    if (message === "retrospective") {
        return {
            type: actionTypes.LINK
        }
    }

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
        // axios.post('https://scrum-bot.azurewebsites.net/chat', json)
        axios.post('http://127.0.0.1:5000/chat', json)
            .then(response => {
                dispatch(responseReceived(response.data))
            });
    }
};

export const resetLink = () => {
    return {
        type: actionTypes.RESET_LINK
    }
}

export const resetScroll = () => {
    return {
        type: actionTypes.SCROLL
    }
}