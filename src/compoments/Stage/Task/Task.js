import React, { useState } from 'react'
import { connect } from 'react-redux'

import {
    Button,
    Card,
    CardBody,
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

import maleAvatar from '../../../assets/img/avatars/maleAvatar.jpg'
import femaleAvatar from '../../../assets/img/avatars/femaleAvatar.jpg'


const Task = ({ task, sidebarOpen }) => {

    const [modalState, setModalState] = useState(false);

    let color = "primary";
    if (task.type === "story") {
        color = "success"
    } else if (task.type === "epic") {
        color = "warning"
    }

    const toggleModal = () => {
        modalState ? setModalState(false) : setModalState(true);
    }

    const moreButtonClicked = () => {
        toggleModal();
    }

    const modalClassName = sidebarOpen ? 'w-75' : '';

    return (
        <Card className="mb-3 bg-light" color={color} outline>
            <CardBody className="p-3 overflow-auto" >
                <Badge color={color} className="m-1">{task.type.toUpperCase()}</Badge>
                <div className="float-right d-inline">
                    <img src={maleAvatar}
                        className="rounded-circle"
                        width="35"
                        height="35"
                        alt="avatar" />
                </div>
                <p className="text-muted">
                    {task.header}
                </p>
                <Button color="info" outline size="sm" onClick={moreButtonClicked}>
                    Details
                </Button>
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
                                    <Badge color={color} className="m-1 float-left">{task.type.toUpperCase()}</Badge>
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
            </CardBody>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        sidebarOpen: state.sidebar.open
    }
}

export default connect(mapStateToProps)(Task)
