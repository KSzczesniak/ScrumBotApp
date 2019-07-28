import React from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Badge,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Col
} from 'reactstrap'

import { setColorForType } from '../utility'

const TaskDetails = ({ task, toggleModal, sidebarOpen, modalState }) => {

    const modalClassName = sidebarOpen ? 'w-75' : '';

    return (
        <Modal isOpen={modalState}
            toggle={toggleModal}
            color="light"
            size="lg"
            modalClassName={modalClassName}
            wrapClassName="text-center"
            scrollable
            centered
            fade>
            <ModalHeader toggle={toggleModal}>
                {task.header}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup row className="align-items-center">
                        <Label sm={2} className="text-right">Type</Label>
                        <Col sm={10}>
                            <Badge color={setColorForType(task.type)} className="m-1 float-left">{task.type.toUpperCase()}</Badge>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">Description</Label>
                        <Col sm={10}>
                            <Input type="textarea" readOnly value={task.description} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">Estimation</Label>
                        <Col sm={10}>
                            <Input value={task.estimation} readOnly />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">Assignee</Label>
                        <Col sm={10}>
                            <Input value={task.assignee} readOnly />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="align-items-center">
                        <Label sm={2} className="text-right">Status</Label>
                        <Col sm={10}>
                            <Badge color="info" className="m-1 float-left">{task.status.toUpperCase()}</Badge>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">Start Date</Label>
                        <Col sm={10}>
                            <Input value={task.startDate} readOnly />

                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">End Date</Label>
                        <Col sm={10}>
                            <Input></Input>
                        </Col>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={toggleModal}>Close</Button>
                <Button color="info" onClick={null}>Save</Button>
            </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = state => {
    return {
        sidebarOpen: state.sidebar.open
    }
};

export default connect(mapStateToProps)(TaskDetails);
