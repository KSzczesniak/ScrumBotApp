import React from 'react';
import {
    Media,
} from 'reactstrap';

import botAvatar from '../../../../assets/img/avatars/botAvatar.png';
import userAvatar from '../../../../assets/img/avatars/userAvatar.png'

const BotMessageItem = props => {
    const classes = ["rounded-circle"];
    let image = botAvatar;
    let left = false;
    let right = false;
    if (props.type === "BOT") {
        classes.push('mr-2');
        left = true;
    }
    else {
        classes.push('ml-2');
        classes.push('float-right');
        image = userAvatar;
        right = true;
    }
    return (
            <Media left={left} right={right} bottom>
                <Media object src={image} alt="Avatar" style={{ height: 25, width: 25 }} className={classes.join(' ')} />
            </Media>
    )
}

export default BotMessageItem
