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

export const link = (endpoint, section) => {
    return {
        type: actionTypes.LINK,
        endpoint: endpoint,
        section: section
    }
};

export const resetLink = () => {
    return {
        type: actionTypes.RESET_LINK
    }
}

export const resetScroll = () => {
    return {
        type: actionTypes.RESET_SCROLL
    }
}

export const resetParams = () => {
    return {
        type: actionTypes.RESET_PARAMS
    }
}

export const responseReceived = conversation => {
    console.log(conversation);
    return dispatch => {
        let currentTask;
        conversation.actions.forEach(action => {
            console.log(action);
            if (action === 2) {
                dispatch(link('/dashboard'));
            }
            if (action === 3) {
                dispatch(actions.showModal(true));
            }
            if (action === 4) {
                currentTask = {
                    ...defaultTask,
                    type: conversation.params.scrum_task || '',
                    assignee: conversation.params.PERSON || '',
                    estimation: conversation.params.CARDINAL && conversation.params.scrum_artifacts ? `${conversation.params.CARDINAL} ${conversation.params.scrum_artifacts}` : '1 story point'
                };
                dispatch(actions.currentTaskChanged(currentTask));
            }
            if (action === 5) {
                dispatch(actions.taskSaved(currentTask));
                dispatch(actions.showModal(false));
                dispatch(actions.resetParams());
            }
            if (action === 20) {
                dispatch(link('/roles', null))
            }
            if (action === 21) {
                dispatch(link('/roles', 'po'))
            }
            if (action === 22) {
                dispatch(link('/roles', 'sm'))
            }
            if (action === 23) {
                dispatch(link('/roles', 'dev'))
            }
            if (action === 30) {
                dispatch(link('/events', null))
            }
            if (action === 31) {
                dispatch(link('/events', 'sprint'))
            }
            if (action === 32) {
                dispatch(link('/events', 'planning'))
            }
            if (action === 33) {
                dispatch(link('/events', 'review'))
            }
            if (action === 34) {
                dispatch(link('/events', 'daily'))
            }
            if (action === 35) {
                dispatch(link('/events', 'retro'))
            }
        });
        dispatch(responseShown(conversation));
    }
};

export const processMessage = message => {
    return (dispatch, getState) => {
        if (message === "retrospective") {
            dispatch(link('/events'))
            return;
        }
        dispatch(messageSent(message));
        const { chat: { conversation } } = getState();
        const json = {
            message: conversation.currentMessage,
            state: conversation.state,
            params: conversation.params,
            suggestion: conversation.suggestion,
            actions: conversation.actions
        };
        console.log(json);
        // axios.post('https://scrum-bot.azurewebsites.net/chat', json)
        axios.post('http://127.0.0.1:5000/chat', json)
            .then(response => {
                dispatch(responseReceived(response.data))
            });
    }
};