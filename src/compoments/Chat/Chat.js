import React, { useEffect, useRef } from 'react';
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

import MessageList from '../MessageList/MessageList';
import * as actions from '../../store/actions/index';

const Chat = props => {
    const inputRef = useRef(null);
    const messagesRef = useRef(null);

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

    const inputChangedHandler = event => {
        props.onInputChanged(event.target.value);
    }

    const keyPressedHandler = event => {
        if (event.charCode === 13) {
            props.onMessageSent(props.currentMessage);
            inputRef.current.value = '';
        }
    }

    return (
        <Card style={{ height: "100vh", width: "100%" }} >
            <CardHeader >
                <strong className="h4">Let's Chat!</strong>
            </CardHeader>
            <CardBody style={{ overflowY: "scroll" }} >
                <div ref={messagesRef}>
                    <MessageList messages={props.messages} />
                </div>
            </CardBody>
            <CardFooter >
                <InputGroup>
                    <Input placeholder="start typing..."
                        className="mr-2 rounded"
                        onChange={inputChangedHandler}
                        innerRef={inputRef}
                        onKeyPress={keyPressedHandler} />
                    <Button onClick={() => props.onMessageSent(props.currentMessage)}
                        color="primary">
                        Send
                    </Button>
                </InputGroup>
            </CardFooter>
        </Card>
    )
};

const mapStateToProps = state => {
    return {
        messages: state.chat.conversation.messages,
        currentMessage: state.chat.conversation.currentMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMessageSent: message => dispatch(actions.processMessage(message)),
        onInputChanged: message => dispatch(actions.inputChanged(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
