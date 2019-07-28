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

import TaskDetails from '../../TaskDetails/TaskDetails'
import { setColorForType } from '../../utility'
import maleAvatar from '../../../../assets/img/avatars/maleAvatar.jpg'
import femaleAvatar from '../../../../assets/img/avatars/femaleAvatar.jpg'


const Task = ({ task }) => {

    const [modalState, setModalState] = useState(false);

    const toggleModal = () => {
        modalState ? setModalState(false) : setModalState(true);
    }

    const moreButtonClicked = () => {
        toggleModal();
    }
    return (
        <Card className="mb-3 bg-light" color={setColorForType(task.type)} outline>
            <CardBody className="p-3 overflow-auto" >
                <Badge color={setColorForType(task.type)} className="m-1">{task.type.toUpperCase()}</Badge>
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
                <TaskDetails toggleModal={toggleModal} task={task} modalState={modalState} />
            </CardBody>
        </Card>
    )
}

export default Task;
