import React from 'react';
import {
    Media,
} from 'reactstrap';

import Avatar from '../Avatar/Avatar'
import classes from './BotMessageItem.module.css'

const BotMessageItem = props => {
    return (
        <Media >
            <Avatar type="BOT"/>
            <Media body>
                <div className={classes.message}>
                    {props.message}
                </div>
            </Media>
        </Media >
    )
}

export default BotMessageItem
