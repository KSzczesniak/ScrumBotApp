import React from 'react';
import { connect } from 'react-redux';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    Form,
    Input

} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

import * as actions from '../../store/actions/index';
import classes from './Navbar.module.css'

const NavbarComponent = props => {

    const toggleButtonHandler = () => {
        props.onSidebarTogglerClicked();
    }

    return (
        <Navbar color="dark" dark expand>
            <Form inline>
                <Input type="text" placeholder="Search..." />
            </Form>
            <Collapse navbar>
                <Nav className="ml-auto" color="light" navbar>
                    <NavItem>
                        <NavLink light>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Home</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <span className={classes.sidebarToggle + "d-flex mr-2"} onClick={toggleButtonHandler}>
                <FontAwesomeIcon icon={faComments} size="2x" className={classes.icon} />
            </span>
        </Navbar>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSidebarTogglerClicked: () => dispatch(actions.sidebarToggle())
    }
}

export default connect(null, mapDispatchToProps)(NavbarComponent);
