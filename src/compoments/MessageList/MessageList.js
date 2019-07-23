import React from 'react'
import { ListGroup} from 'reactstrap'

import BotMessageItem from './MessageItems/BotMessageItem/BotMessageItem'
import UserMessageItem from './MessageItems/UserMessageItem/UserMessageItem'


const MessageList = props => {
    //const tempMessages = [{m:"Hi",t:"BOT"}, {m:"Hi",t:"USER"}, {m:"Hi",t:"BOT"},{m:"Hi",t:"USER"},{m:"Hi",t:"BOT"}]
    let id = 0;
    let messages = null;
    if (props.messages) {
        messages = props.messages.map(message => {
            let messageItem;
            if (message.type === "BOT") {
                messageItem = <BotMessageItem key={id++} message={message.content} />
            } else {
                messageItem = <UserMessageItem key={id++} message={message.content} />
            }        
            return messageItem;
        })
    }
    return (
        <ListGroup  >
            {messages}            
        </ListGroup>
    )
}


export default MessageList
