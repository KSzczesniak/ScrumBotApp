import React from 'react'

const CustomizedModal = () => {
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

            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => deleteTask(task)}>Delete</Button>
                <Button color="info" onClick={() => saveTask(task)}>Save</Button>
            </ModalFooter>
        </Modal>
    )
    )
}

export default CustomizedModal
