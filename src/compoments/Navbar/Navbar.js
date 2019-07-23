import React from 'react';
import { connect } from 'react-redux';
import {
    Container,
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
        <Navbar color="dark" dark expand="md" sticky="top">
            <Container>
                <Form inline>
                    <Input type="text" placeholder="Search..." />
                </Form>
                <Collapse navbar>
                    <Nav className="ml-auto" color="light" navbar>
                        <NavItem>
                            <NavLink active>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>ScrumBoard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Users</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
            <span className={classes.sidebarToggle + "d-flex mx-2"} onClick={toggleButtonHandler}>
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
