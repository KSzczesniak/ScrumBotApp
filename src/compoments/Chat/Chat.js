import React from 'react';
import { connect } from 'react-redux';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    InputGroup,
    Input,
    Button,
    ListGroup
} from 'reactstrap';

import MessageList from '../MessageList/MessageList';
import * as actions from '../../store/actions/index';

const Chat = props => {

    const inputChangedHandler = (event) => {
        props.onInputChanged(event.target.value);
    }

    return (
        <Card style={{ height: "100vh", maxHeight: "100vh", position: "fixed", top: 0, width: "100wv" }} >
            <CardHeader >
                <strong className="h4">Let's Chat!</strong>
            </CardHeader>
            <CardBody style={{ overflowY: "scroll" }} >
                <ListGroup>
                    <MessageList messages={props.messages} />
                </ListGroup>
            </CardBody>
            <CardFooter >
                <InputGroup>
                    <Input placeholder="start typing..." onChange={inputChangedHandler} />
                    <Button onClick={() => props.onMessageSent(props.currentMessage)} color="primary">Send</Button>
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
