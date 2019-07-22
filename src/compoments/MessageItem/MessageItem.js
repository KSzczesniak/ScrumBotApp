import React from 'react';
import {
    Media,
} from 'reactstrap';

import botAvatar from '../../assets/img/avatars/botAvatar.png';
import classes from './MessageItem.module.css'

const MessageItem = props => {
    return (
        <Media >
            <Media left bottom>
                <Media object src={botAvatar} alt="User avatar" style={{ height: 30, width: 30 }} className={"rounded-circle mr-2"} />
            </Media>
            <Media body>
                <div className={classes.message}>
                    MESSAGE
                </div>
            </Media>
        </Media >
    )
}

export default MessageItem
