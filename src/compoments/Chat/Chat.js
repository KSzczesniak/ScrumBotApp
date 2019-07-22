import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    InputGroup,
    Input,
    Button,
    ListGroup
} from 'reactstrap'

import MessageList from '../MessageList/MessageList'

const Chat = () => {
    return (
        <Card style={{ display: "flex", flexFlow: "column", height: "100vh", position: "fixed", top: 0 }} >
            <CardHeader style={{ flex: "0 1 auto" }}>
                <strong className="h4">Let's Chat!</strong>
            </CardHeader>
            <CardBody style={{ flex: "1 1 auto" }}>
                <ListGroup>
                    <MessageList />
                </ListGroup>
            </CardBody>
            <CardFooter style={{ flex: "0 1 10px" }}>
                <InputGroup>
                    <Input placeholder="start typing..." />
                    <Button color="primary">Send</Button>
                </InputGroup>
            </CardFooter>
        </Card>
    )
}

export default Chat
