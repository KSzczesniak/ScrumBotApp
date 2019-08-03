import React from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Skills = ({ skills }) => {
    const skillItems = skills ? skills.map((skill, index) => {
        return (
            <ListGroupItem key={index} className="border-0 p-1 bg-light">
                <FontAwesomeIcon icon={faCheck} /> {skill}
            </ListGroupItem>
        );
    }) : null;
    return (
        <ListGroup>
            {skillItems}
        </ListGroup>
    )
}

export default Skills
