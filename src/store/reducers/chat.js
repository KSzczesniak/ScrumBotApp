import * as actionTypes from '../actions/actionTypes'

const initialState = {
    conversation: {
        messages: [],
        currentMessage: '',
        state: 0,
        params: {},
        suggestion: '',
        excluded: []
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_CHANGED: {
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    params: {
                        ...state.conversation.params,
                    },
                    excluded: {
                        ...state.conversation.excluded
                    },
                    currentMessage: action.message,
                    messages: state.conversation.messages.concat([])
                }
            };
        }
        case actionTypes.MESSAGE_SENT: {
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    params: {
                        ...state.conversation.params,
                    },
                    excluded: {
                        ...state.conversation.excluded
                    },
                    messages: state.conversation.messages.concat({type: "USER", content: state.conversation.currentMessage.slice()})
                }
            };
        }
        case actionTypes.RESPONSE_RECEIVED: {
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    params: action.conversation.params,
                    excluded: action.conversation.excluded,
                    state: action.conversation.state,
                    suggestion: action.conversation.suggestion,
                    messages: state.conversation.messages.concat({type: "BOT", content: action.conversation.message})
                }
            };
        }
        default: return state;
    }
}

export default reducer;