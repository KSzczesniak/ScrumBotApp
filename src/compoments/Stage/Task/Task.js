import React, { useState } from 'react'

import {
    Button,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'

const Task = ({ type, content }) => {

    const [modalState, setModalState] = useState(false);

    const bg = "bg-";
    let color = "primary";
    if (type === "STORY") {
        color = "success"
    } else if (type === "EPIC") {
        color = "warning"
    }

    const toggleModal = () => {
        modalState ? setModalState(false) : setModalState(true);
    }

    const moreButtonClicked = () => {
        toggleModal();
    }

    return (
        <Card className="mb-3" color={color} outline>
            <CardHeader className={bg + color}>
                <CardTitle tag="h6" className="text-light">{type}</CardTitle>
            </CardHeader>
            <CardBody className="p-3">
                <div>
                    Nam pretium turpis et arcu. Duis arcu. Nam pretium turpis et arcu. Duis arcu.
                </div>
                <Button color="info" outline size="sm" onClick={moreButtonClicked}>
                    Details
                </Button>
                <Modal isOpen={modalState}>
                    <ModalHeader>

                    </ModalHeader>
                    <ModalBody>

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

export default Task
