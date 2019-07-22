import React, { Component } from 'react'
import { connect } from 'react-redux'

import PerfectScrollbar from 'react-perfect-scrollbar';

import classes from "./Sidebar.module.css"
import Chat from "../Chat/Chat"

export class Sidebar extends Component {


    render() {
        const style = [classes.sidebar] //, classes.toggled
        if (!this.props.show) {
            style.push(classes.closed)
        }
        return (
            <nav className={style.join(' ')} >
                <PerfectScrollbar>
                    <Chat />
                </PerfectScrollbar>
            </nav >
        )
    }
}

const mapStateToProps = state => {
    return {
        show: state.sidebar.open
    }
}

export default connect(mapStateToProps)(Sidebar)
