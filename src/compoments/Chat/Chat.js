import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
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
        inputRef.current.focus();
        scrollToBottom();
        if (props.link) {
            setTimeout(() => {
                props.history.push(props.link)
                props.resetLink();
            }, 500)
        }
    });

    const scrollToBottom = () => {
        messagesRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    const keyPressedHandler = event => {
        if (event.charCode === 13) {
            props.onMessageSent(currentMessage);
            inputRef.current.value = '';
        }
    }

    const inputChangedHandler = event => {
        setCurrentMessage(event.target.value);
    }

    const sendMessageHandler = () => {
        props.onMessageSent(currentMessage);
        inputRef.current.value = '';
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
                        onKeyPress={keyPressedHandler}
                        onChange={inputChangedHandler}
                    />
                    <Button onClick={sendMessageHandler}
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
        messages: state.chat.conversation.messages,
        link: state.chat.link
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMessageSent: message => dispatch(actions.processMessage(message)),
        resetLink: () => dispatch(actions.resetLink())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));
