import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'

import Stage from '../../compoments/Stage/Stage'
import Task from '../../compoments/Stage/Task/Task'



const Dashboard = () => {

    const fakeArray = [1, 1, 1]
    let id = 0;
    const tasks = fakeArray.map(dupa => {
        return <Task key={id++}></Task>
    })
    const stageNames = ['To do', 'In progress', 'In Review', 'Resolved']
    const stages = stageNames.map(name => {
        return (
            <Col md="6" lg="3">
                <Stage key={id++} name={name}>
                    {tasks}
                </Stage>
            </Col>
        )
    })

    return (
        <Container>
            <h1>Dashboard</h1>
            <Row>
                {stages}
            </Row>
        </Container>
    )
}

export default Dashboard
