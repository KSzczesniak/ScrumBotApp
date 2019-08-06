import * as actionTypes from '../actions/actionTypes'

const initialState = {
    conversation: {
        messages: [],
        currentMessage: '',
        state: 0,
        params: {},
        suggestion: '',
        excluded: []
    },
    link:null,
    scroll:false
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
        case actionTypes.LINK: {
            console.log('sc dupa')
            
            return {
                ...state,
                link: '/events',
                scroll: !state.scroll
            }
        }
        case actionTypes.RESET_LINK: {
            return {
                ...state,
                link: null,
            }
        }
        case actionTypes.SCROLL: {
            return {
                ...state,
                scroll: !state.scroll
            }
        }
        default: return state;
    }
}

export default reducer;