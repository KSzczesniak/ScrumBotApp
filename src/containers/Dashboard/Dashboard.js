import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import axios from 'axios'

import Stage from '../../compoments/Stage/Stage'
import Task from '../../compoments/Stage/Task/Task'

class Dashboard extends Component {
    state = {
        tasks: null
    };

    componentDidMount() {
        axios.get('https://scrumbot-c59e1.firebaseio.com/tasks.json')
            .then(response => {
                this.setState({ tasks: response.data });
            });
    }
    render() {
        const stageNames = ['To Do', 'In Progress', 'In Review', 'Resolved'];
        let tasks;
        const stages = stageNames.map((name, index) => {
            if (this.state.tasks) {
                tasks = this.state.tasks.filter(task => task.status === name)
                    .map((task, index) => {
                        return <Task key={index}
                            task={task}
                        />
                    });
            }
            return (
                <Col key={index} md="6" lg="3" className="mb-3">
                    <Stage name={name}>
                        {tasks}
                    </Stage>
                </Col>
            )
        });

        return (
            <div className="bg-light">
                <Container>
                    <h1 className="text-center" >Dashboard</h1>
                    <Row>
                        {stages}
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Dashboard