import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from "./Sidebar.module.css"
import Chat from "../Chat/Chat"

export class Sidebar extends Component {


    render() {
        const style = [classes.sidebar]
        if (!this.props.show) {
            style.push(classes.closed)
        }
        return (
            <nav className={style.join(' ')} >
                <Chat />
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
