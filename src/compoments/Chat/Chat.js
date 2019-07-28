import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    InputGroup,
    Input,
    Button,
} from 'reactstrap';

import MessageList from './MessageList/MessageList';
import * as actions from '../../store/actions/index';

const Chat = props => {
    const inputRef = useRef(null);
    const messagesRef = useRef(null);
    const [currentMessage, setCurrentMessage] = useState('');

    useEffect(() => {
        inputRef.current.focus();
        scrollToBottom();
    }, []);

    useEffect(() => {
        scrollToBottom();
    });

    const scrollToBottom = () => {
        messagesRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    const keyPressedHandler = event => {
        setCurrentMessage(event.target.value);
        if (event.charCode === 13) {
            props.onMessageSent(currentMessage);
            inputRef.current.value = '';
        }
    }

    return (
        <Card style={{ height: "100vh", width: "25%", position: "fixed" }} >
            < CardHeader >
                <strong className="h4">Let's Chat!</strong>
            </CardHeader >
            <CardBody className="overflow-auto" >
                <div ref={messagesRef}>
                    <MessageList messages={props.messages} />
                </div>
            </CardBody>
            <CardFooter >
                <InputGroup>
                    <Input placeholder="start typing..."
                        className="mr-2 rounded"
                        innerRef={inputRef}
                        onKeyPress={keyPressedHandler} />
                    <Button onClick={() => props.onMessageSent(currentMessage)}
                        color="primary">
                        Send
                    </Button>
                </InputGroup>
            </CardFooter>
        </Card >
    )
};

const mapStateToProps = state => {
    return {
        messages: state.chat.conversation.messages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMessageSent: message => dispatch(actions.processMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
