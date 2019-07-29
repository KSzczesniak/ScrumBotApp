import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {
    Container,
    Row,
    Col,
    Spinner,
    Button,
    Card,
    CardBody,
} from 'reactstrap'

import Stage from '../../compoments/Dashboard/Stage/Stage'
import Task from '../../compoments/Dashboard/Stage/Task/Task'
import TaskDetails from '../../compoments/Dashboard/TaskDetails/TaskDetails';
import Summary from '../../compoments/Dashboard/Summary/Summary';
import { defaultTask, taskSummary } from '../../compoments/Dashboard/utility'
import * as actions from '../../store/actions/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends Component {
    state = {
        modalOpen: false
    };

    componentDidMount() {
        this.props.fetchTasks();
    }

    resetTask = () => {
        const id = parseInt(Object.keys(this.props.tasks)[this.props.tasks.length - 1]) + 1;
        const newTask = {
            ...defaultTask,
            id: id
        }
        this.props.currentTaskChanged(newTask);
    };

    toggleModal = () => {
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen,
        }));
    };

    showTaskDetails = currentTask => {
        this.props.currentTaskChanged(currentTask);
        this.toggleModal();
    };

    addTaskHandler = () => {
        this.resetTask();
        this.toggleModal();
    };

    deleteTaskHandler = task => {
        this.props.taskDeleted(task);
        this.toggleModal();
    };

    saveTaskHandler = newTask => {
        this.props.taskSaved(newTask);
        this.toggleModal();
    };

    inputChangedHandler = event => {
        const modifiedTask = {
            ...this.props.currentTask,
            [event.target.name]: event.target.value
        }
        this.props.currentTaskChanged(modifiedTask);
    };

    typeChangedHandler = (property, value) => {
        const modifiedTask = {
            ...this.props.currentTask,
            [property]: value
        }
        this.props.currentTaskChanged(modifiedTask);
    }

    render() {
        const stageNames = ['To Do', 'In Progress', 'In Review', 'Resolved'];
        let tasks;
        const stages = stageNames.map((name, index) => {
            if (this.props.tasks) {
                tasks = this.props.tasks.filter(task => task.status === name)
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

        if (this.props.tasks) {
            Object.entries(summary).forEach(([key, value]) => {
                const tasksOfGivenType = this.props.tasks.filter(task => task.type === key);
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
                                    {this.props.tasks ? stages : spinner}
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
                <TaskDetails task={this.props.currentTask}
                    toggleModal={this.toggleModal}
                    modalState={this.state.modalOpen}
                    saveTask={this.saveTaskHandler}
                    deleteTask={this.deleteTaskHandler}
                    inputChanged={this.inputChangedHandler}
                    typeChanged={this.typeChangedHandler} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.dashboard.tasks,
        currentTask: state.dashboard.currentTask
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch(actions.fetchTasks()),
        currentTaskChanged: task => dispatch(actions.currentTaskChanged(task)),
        taskDeleted: task => dispatch(actions.taskDeleted(task)),
        taskSaved: task => dispatch(actions.taskSaved(task)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
