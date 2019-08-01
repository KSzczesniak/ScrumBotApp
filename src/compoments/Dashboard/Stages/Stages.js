import React, { Fragment } from 'react'
import { Col } from 'reactstrap'

import Stage from './Stage/Stage'
import Task from './Stage/Task/Task'

const Stages = props => {
    let tasks;
    const stages = props.names.map((name, index) => {
        if (props.tasks) {
            tasks = props.tasks.filter(task => task.status === name)
                .map(task => {
                    return <Task key={task.id}
                        task={task}
                        showTaskDetails={props.showTaskDetails}
                        toggleModal={props.toggleModal}
                    />
                });
        }
        return (
            <Col key={index} md="6" lg="3" className="mt-3">
                <Stage name={name}>
                    {tasks}
                </Stage>
            </Col>
        )
    });
    return (
        <Fragment>
            {stages}
        </Fragment>
    )
}

export default Stages
