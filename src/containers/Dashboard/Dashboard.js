import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'

import Stage from '../../compoments/Stage/Stage'
import Task from '../../compoments/Stage/Task/Task'



const Dashboard = () => {

    const taskTypes = ["TASK", "STORY", "EPIC"]
    const tasks = taskTypes.map((type, index) => {
        return <Task key={index} type={type}></Task>
    })
    const stageNames = ['TO DO', 'IN PROGRESS', 'IN REVIEW', 'RESOLVED']
    const stages = stageNames.map((name, index) => {
        return (
            <Col key={index} md="6" lg="3">
                <Stage name={name}>
                    {tasks}
                </Stage>
            </Col>
        )
    })

    return (
        <Container>
            <h1 className="text-center" >Dashboard</h1>
            <Row>
                {stages}
            </Row>
        </Container>
    )
}

export default Dashboard
