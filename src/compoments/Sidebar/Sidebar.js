import React, { Component } from 'react'
import { connect } from 'react-redux'

import PerfectScrollbar from 'react-perfect-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import classes from "./Sidebar.module.css"

export class Sidebar extends Component {


    render() {
        const style = [classes.sidebar] //, classes.toggled
        if (!this.props.show) {
            style.push(classes.closed)
        }
        return (
            <nav className={style.join(' ')}>
                <div >
                    <PerfectScrollbar>
                        <div className="sidebarHeading">
                            <FontAwesomeIcon icon={faCheck} size="2x" />
                            <span className="align-midle">ScrumBot</span>
                        </div>
                        <ul className={classes.sidebarMessages}>

                        </ul>

                    </PerfectScrollbar>
                </div>
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
