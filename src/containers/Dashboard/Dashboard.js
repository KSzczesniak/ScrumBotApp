import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Spinner
} from 'reactstrap'
import axios from 'axios'

import Stage from '../../compoments/Dashboard/Stage/Stage'
import Task from '../../compoments/Dashboard/Stage/Task/Task'
import TaskDetails from '../../compoments/Dashboard/TaskDetails/TaskDetails';

class Dashboard extends Component {
    state = {
        tasks: null,
        currentTask: this.createDefaultTask(),
        modalOpen: false
    };

    componentDidMount() {
        axios.get('https://scrumbot-c59e1.firebaseio.com/tasks.json')
            .then(response => {
                this.setState({ tasks: response.data });
            });
    }

    createDefaultTask() {
        return {
            assignee: '',
            description: '',
            endDate: '',
            estimation: 0,
            header: '',
            startDate: '',
            status: 'To Do',
            type: 'task',
            unit: "time"
        }
    };

    resetTask() {
        this.setState({
            currentTask: this.createDefaultTask(),
            modalOpen: false
        });
    };

    toggleModal = () => {
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen,
        }));
    }

    showTaskDetails = currentTask => {
        this.setState({ currentTask: currentTask });
        this.toggleModal();
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
                            showTaskDetails={this.showTaskDetails}
                            toggleModal={this.toggleModal}
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

        const spinner = (
            <Col className="text-center">
                <Spinner color="info" style={{ width: "15rem", height: "15rem" }} />
            </Col>
        );

        return (
            <div className="bg-light">
                <Container fluid>
                    <h1 className="text-center" >Dashboard</h1>
                    <hr />
                    <Row>
                        <Col lg="10">
                            <Container>
                                <Row>
                                    {this.state.tasks ? stages : spinner}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <TaskDetails task={this.state.currentTask}
                        toggleModal={this.toggleModal}
                        modalState={this.state.modalOpen} />
                </Container>
            </div>
        )
    }
}

export default Dashboard
