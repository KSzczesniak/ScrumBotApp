import React, { Component, Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



class Layout extends Component {

    state = {
        showSideBar: false
    }

    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">

                </Navbar>
                {this.props.children}
            </Fragment>
        )
    }
}

export default Layout
