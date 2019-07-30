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
            console.log(action.message)
            console.log('DUPA')
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    params: action.conversation.params,
                    excluded: action.conversation.excluded,
                    state: action.conversation.state,
                    suggestion: action.conversation.suggestion,
                    messages: state.conversation.messages.concat({ type: "BOT", content: action.conversation.message })
                }
            };
        }
        default: return state;
    }
}

export default reducer;