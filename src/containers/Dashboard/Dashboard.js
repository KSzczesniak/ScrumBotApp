import React, { Component, Fragment } from 'react'
import {
    Container,
    Row,
    Col,
    Spinner,
    Button,
    Card,
    CardBody,
} from 'reactstrap'
import axios from 'axios'

import Stage from '../../compoments/Dashboard/Stage/Stage'
import Task from '../../compoments/Dashboard/Stage/Task/Task'
import TaskDetails from '../../compoments/Dashboard/TaskDetails/TaskDetails';
import Summary from '../../compoments/Dashboard/Summary/Summary';
import { createDefaultTask } from '../../compoments/Dashboard/utility'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends Component {
    state = {
        tasks: null,
        currentTask: createDefaultTask(),
        modalOpen: false
    };

    componentDidMount() {
        axios.get('https://scrumbot-c59e1.firebaseio.com/tasks.json')
            .then(response => {
                this.setState({ tasks: response.data });
            });
    }

    resetTask() {
        this.setState({
            currentTask: createDefaultTask(),
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
                <Col key={index} md="6" lg="3" className="mt-3">
                    <Stage name={name}>
                        {tasks}
                    </Stage>
                </Col>
            )
        });

        const taskOfGivenType = {
            sum: 0,
            stages: {
                "To Do": 0,
                "In Progress": 0,
                "In Review": 0,
                "Resolved": 0
            }
        }
        const summary = {
            task: JSON.parse(JSON.stringify(taskOfGivenType)),
            story: JSON.parse(JSON.stringify(taskOfGivenType)),
            epic: JSON.parse(JSON.stringify(taskOfGivenType))
        };

        if (this.state.tasks) {
            Object.entries(summary).forEach(([key, value]) => {
                const tasksOfGivenType = this.state.tasks.filter(task => task.type === key);
                value.sum = tasksOfGivenType.length;

                Object.keys(value.stages).forEach(innerKey => {
                    value.stages[innerKey] = tasksOfGivenType.filter(task => task.status === innerKey).length;
                });
            });
        }

        const spinner = (
            <Col className="text-center">
                <Spinner color="info" style={{ width: "15rem", height: "15rem" }} />
            </Col>
        );

        return (
            <Fragment>
                <Container fluid>
                    <h1 className="text-center" >Dashboard</h1>
                    <hr />
                    <Row className="pb-3">
                        <Col lg="10">
                            <Container className="p-0">
                                <Row>
                                    {this.state.tasks ? stages : spinner}
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <Button color="success my-3" block>
                                <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
                                Add Task
                            </Button>
                            <Card style={{ backgroundColor: "rgb(65, 1, 65)", borderRadius: "20px" }}>
                                <CardBody className="text-white p-2" >
                                    <h6 className="text-center">Summary</h6>
                                    <Summary summary={summary} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <TaskDetails task={this.state.currentTask}
                    toggleModal={this.toggleModal}
                    modalState={this.state.modalOpen} />
            </Fragment>
        )
    }
}

export default Dashboard
