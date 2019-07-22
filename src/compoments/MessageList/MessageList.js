import React from 'react'
import { ListGroup } from 'reactstrap'

import MessageItem from '../MessageItem/MessageItem'

const MessageList = props => {
    const tempMessages = ["Hi", "Hi", "Hi"]
    let id = 0;
    const messages = tempMessages.map(message => {
        return <MessageItem key={id++} />
    })
    return (
        <ListGroup>
            {messages}
        </ListGroup>
    )
}

export default MessageList
