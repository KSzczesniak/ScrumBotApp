import * as actionTypes from '../actions/actionTypes'

const initialState = {
    conversation: {
        messages: [],
        currentMessage: '',
        state: 1,
        params: {},
        suggestion: '',
        actions: []
    },
    link: null,
    scroll: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MESSAGE_SENT: {
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    currentMessage: action.message,
                    messages: state.conversation.messages.concat({ type: "USER", content: action.message })
                }
            };
        }
        case actionTypes.RESPONSE_RECEIVED: {
            const messages = action.conversation.message.map(message => {
                return { type: "BOT", content: message };
            })
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    params: action.conversation.params,
                    actions: action.conversation.actions,
                    state: action.conversation.state,
                    suggestion: action.conversation.suggestion,
                    messages: state.conversation.messages.concat(messages)
                }
            };
        }
        case actionTypes.LINK: {
            return {
                ...state,
                link: action.endpoint,
                scroll: action.section
            }
        }
        case actionTypes.RESET_LINK: {
            return {
                ...state,
                link: null
            }
        }
        case actionTypes.RESET_SCROLL: {
            return {
                ...state,
                scroll: null
            }
        }
        case actionTypes.RESET_PARAMS: {
            console.log('reset params')
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    params: {}
                }
            }
        }
        default: return state;
    }
}

export default reducer;