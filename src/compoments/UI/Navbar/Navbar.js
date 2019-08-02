import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import {
    Container,
    Navbar,
    Nav,
    NavItem,
    Collapse,
    Form,
    Input

} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

import * as actions from '../../../store/actions/index';
import classes from './Navbar.module.css'

const NavbarComponent = props => {

    const toggleButtonHandler = () => {
        props.onSidebarTogglerClicked();
    }

    return (
        <Navbar className={classes.navbarColor} color="dark" dark expand="md" sticky="top">
            <Container>
                <Form inline>
                    <Input type="text" placeholder="Search..." />
                </Form>
                <Collapse navbar>
                    <Nav className="ml-auto" color="light" navbar>
                        <NavItem>
                            <NavLink to="/home" className="nav-link">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/dashboard" className="nav-link">
                                Dashboard
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/team" className="nav-link">
                                Team
                            </NavLink>
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
        onSidebarTogglerClicked: () => dispatch(actions.sidebarToggled())
    }
}

export default connect(null, mapDispatchToProps)(NavbarComponent);
