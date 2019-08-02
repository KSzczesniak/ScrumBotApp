import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Spinner,
    Button,
    Card,
    CardBody,
} from 'reactstrap'

import Stages from '../../compoments/Dashboard/Stages/Stages'
import TaskDetails from '../../compoments/Dashboard/TaskDetails/TaskDetails';
import Summary from '../../compoments/Dashboard/Summary/Summary';
import { defaultTask, taskSummary } from '../../compoments/Dashboard/utility'
import * as actions from '../../store/actions/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import CustomizedModal from '../../compoments/UI/CustomizedModal/CustomizedModal';

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchTasks();
    }

    resetTask = () => {
        const id = parseInt(Object.values(this.props.tasks)[this.props.tasks.length - 1].id) + 1;
        const newTask = {
            ...defaultTask,
            id: id
        }
        this.props.currentTaskChanged(newTask);
    };

    toggleModal = () => {
        this.props.modalToggled();
    };

    showTaskDetails = currentTask => {
        this.props.currentTaskChanged(currentTask);
        this.toggleModal();
    };

    addTaskHandler = () => {
        this.resetTask();
        this.toggleModal();
    };

    deleteTaskHandler = () => {
        this.props.taskDeleted();
        this.toggleModal();
    };

    saveTaskHandler = () => {
        this.props.taskSaved();
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
                <Container>
                    <h1 className="text-center" >Dashboard</h1>
                    <hr />
                    <Row className="pb-3">
                        <Col lg="10">
                            <Container className="p-0">
                                <Row>
                                    {this.props.tasks ?
                                        <Stages tasks={this.props.tasks}
                                            names={Object.keys(summary.task.stages)}
                                            showTaskDetails={this.showTaskDetails}
                                            toggleModal={this.toggleModal}
                                        /> : spinner}
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
                <CustomizedModal toggle={this.toggleModal}
                    isOpen={this.props.modalOpen}
                    saveHandler={this.saveTaskHandler}
                    deleteHandler={this.deleteTaskHandler}
                    header={this.props.currentTask.header}>
                    <TaskDetails task={this.props.currentTask}
                        inputChanged={this.inputChangedHandler}
                        typeChanged={this.typeChangedHandler} />
                </CustomizedModal>

            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.dashboard.tasks,
        currentTask: state.dashboard.currentTask,
        modalOpen: state.dashboard.modalOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch(actions.fetchTasks()),
        currentTaskChanged: task => dispatch(actions.currentTaskChanged(task)),
        taskDeleted: task => dispatch(actions.taskDeleted(task)),
        taskSaved: task => dispatch(actions.taskSaved(task)),
        modalToggled: () => dispatch(actions.modalToggled())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
