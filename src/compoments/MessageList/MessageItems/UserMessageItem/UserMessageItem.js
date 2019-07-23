import React from 'react';
import {
    Media,
} from 'reactstrap';

import Avatar from '../Avatar/Avatar'
import classes from './UserMessageItem.module.css'

const BotMessageItem = props => {
    return (
        <Media >
            <Media body>
                <div className={classes.message}>
                    {props.message}
                </div>
            </Media>
            <Avatar type="USER" />            
        </Media >
    )
}

export default BotMessageItem
