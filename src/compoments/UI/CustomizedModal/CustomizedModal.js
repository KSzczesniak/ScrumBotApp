import React from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap'

const CustomizedModal = ({ isOpen, toggle, header, deleteHandler, saveHandler, children, sidebarOpen }) => {
    const classes = sidebarOpen ? 'w-75' : '';
    return (
        <Modal isOpen={isOpen}
            toggle={toggle}
            color="light"
            size="lg"
            modalClassName={classes}
            scrollable
            centered
            fade>
            <ModalHeader toggle={toggle}>
                {header}
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={deleteHandler}>Delete</Button>
                <Button color="info" onClick={saveHandler}>Save</Button>
            </ModalFooter>
        </Modal>
    )
};

const mapStateToProps = state => {
    return {
        sidebarOpen: state.sidebar.open
    }
};

export default connect(mapStateToProps)(CustomizedModal);
