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
import { defaultTask, taskSummary } from '../../compoments/Dashboard/utility'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends Component {
    state = {
        tasks: null,
        currentTask: defaultTask,
        modalOpen: false
    };

    componentDidMount() {
        axios.get('https://scrumbot-c59e1.firebaseio.com/tasks.json')
            .then(response => {
                const tasksWithIds = Object.entries(response.data).map(([key, value]) => {
                    return {
                        ...value,
                        id: key
                    };
                });
                this.setState({ tasks: tasksWithIds });
            });
    }

    resetTask = () => {
        this.setState(prevState => {
            const id = parseInt(Object.keys(prevState.tasks)[prevState.tasks.length - 1]) + 1;
            return {
                currentTask: {
                    ...defaultTask,
                    id: id
                }
            };
        });
    };

    toggleModal = () => {
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen,
        }));
    };

    showTaskDetails = currentTask => {
        console.log(currentTask);
        this.setState({ currentTask: currentTask });
        this.toggleModal();
    };

    addTaskHandler = () => {
        this.resetTask();
        this.toggleModal();
    };

    deleteTaskHandler = task => {
        axios.delete(`https://scrumbot-c59e1.firebaseio.com/tasks/${task.id}.json`);
        console.log(task);
        this.setState(prevState => ({ tasks: prevState.tasks.filter(el => el.id !== task.id) }));
        this.toggleModal();
    };

    saveTaskHandler = newTask => {
        this.setState(prevState => {
            return { tasks: prevState.tasks.concat(newTask) }
        });
        axios.put(`https://scrumbot-c59e1.firebaseio.com/tasks/${newTask.id}.json`, newTask);
        this.toggleModal();
    };

    render() {
        const stageNames = ['To Do', 'In Progress', 'In Review', 'Resolved'];
        let tasks;
        const stages = stageNames.map((name, index) => {
            if (this.state.tasks) {
                tasks = this.state.tasks.filter(task => task.status === name)
                    .map(task => {
                        return <Task key={task.id}
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

        const summary = {
            task: JSON.parse(JSON.stringify(taskSummary)),
            story: JSON.parse(JSON.stringify(taskSummary)),
            epic: JSON.parse(JSON.stringify(taskSummary))
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
                            <Button color="success my-3"
                                block
                                onClick={this.addTaskHandler}>
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
                    modalState={this.state.modalOpen}
                    saveTask={this.saveTaskHandler}
                    deleteTask={this.deleteTaskHandler} />
            </Fragment>
        )
    }
}

export default Dashboard
