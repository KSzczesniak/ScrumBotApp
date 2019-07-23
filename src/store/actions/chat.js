import * as actionTypes from './actionTypes'
import axios from 'axios'

export const inputChanged = message => {
    return {
        type: actionTypes.INPUT_CHANGED,
        message: message
    }
}

export const messageSent = conversation => {
    return {
        type: actionTypes.MESSAGE_SENT,
    }
}

export const responseReceived = conversation => {
    return {
        type: actionTypes.RESPONSE_RECEIVED,
        conversation: conversation
    }
}

export const processMessage = () => {
    return (dispatch, getState) => {
        const { conversation } = getState().chat;
        dispatch(messageSent());
        const json = {
            message: conversation.currentMessage,
            state: conversation.state,
            params: conversation.params,
            suggestion: conversation.suggestion,
            excluded: conversation.excluded
        };
        axios.post('https://scrum-bot.azurewebsites.net/chat', json)
            .then(response => {
                console.log(response.data);
                dispatch(responseReceived(response.data))
            });

    }
}
