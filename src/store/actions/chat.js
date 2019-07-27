import * as actionTypes from './actionTypes'
import axios from 'axios'

export const messageSent = message => {
    return {
        type: actionTypes.MESSAGE_SENT,
        message: message
    }
}

export const responseReceived = conversation => {
    return {
        type: actionTypes.RESPONSE_RECEIVED,
        conversation: conversation
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
