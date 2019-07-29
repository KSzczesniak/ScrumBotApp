import React, { useState } from 'react'
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

const TaskDetails = ({ task, toggleModal, sidebarOpen, modalState, saveTask, deleteTask }) => {

    const [state, setState] = useState({
        ...task
    });

    const inputChangedHandler = event => {
        setState({
            ...state,
            id: task.id,
            [event.target.name]: event.target.value
        });
        console.log(state)
    };

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
                {state.header}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup row className="align-items-center">
                        <Label sm={2} className="text-right">Type</Label>
                        <Col sm={10}>
                            <Badge color={setColorForType(state.type)} className="m-1 float-left">{state.type.toUpperCase()}</Badge>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">Header</Label>
                        <Col sm={10}>
                            <Input value={state.header}
                                name="header"
                                onChange={inputChangedHandler} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">Description</Label>
                        <Col sm={10}>
                            <Input type="textarea"
                                name="description"
                                value={state.description}
                                onChange={inputChangedHandler}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">Estimation</Label>
                        <Col sm={10}>
                            <Input value={state.estimation}
                                name="estimation"
                                type="number"
                                onChange={inputChangedHandler} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">Assignee</Label>
                        <Col sm={10}>
                            <Input value={state.assignee}
                                name="assignee"
                                onChange={inputChangedHandler} />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="align-items-center">
                        <Label sm={2} className="text-right">Status</Label>
                        <Col sm={10}>
                            <Badge color="info" className="m-1 float-left">{state.status.toUpperCase()}</Badge>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">Start Date</Label>
                        <Col sm={10}>
                            <Input value={state.startDate}
                                name="startDate"
                                onChange={inputChangedHandler} />

                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} className="text-right">End Date</Label>
                        <Col sm={10}>
                            <Input value={state.endDate}
                                name="endDate"
                                onChange={inputChangedHandler} />
                        </Col>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => deleteTask(state)}>Delete</Button>
                <Button color="info" onClick={() => saveTask(state)}>Save</Button>
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
