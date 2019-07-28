import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Spinner,
    Button,
    Card,
    CardBody,
    Badge
} from 'reactstrap'
import axios from 'axios'

import Stage from '../../compoments/Dashboard/Stage/Stage'
import Task from '../../compoments/Dashboard/Stage/Task/Task'
import TaskDetails from '../../compoments/Dashboard/TaskDetails/TaskDetails';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { setColorForType } from '../../compoments/Dashboard/utility'

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
        let summaryComponent;
        const taskTypes = ["task", "story", "epic"];
        const taskOfGivenType = {
            sum: 0,
            stages: {
                "To Do": 0,
                "In Progress": 0,
                "In Test": 0,
                "Resolved": 0
            }
        }
        const summary = {
            task: {
                sum: 0,
                stages: Object.create(taskOfGivenType)
            },
            story: {
                sum: 0,
                stages: Object.create(taskOfGivenType)
            },
            epic: {
                sum: 0,
                stages: Object.create(taskOfGivenType)
            }

        };

        if (this.state.tasks) {
            let tasksOfGivenType;
            let tasksInStage;
            taskTypes.forEach(taskType => {
                tasksOfGivenType = this.state.tasks.filter(task => task.type === taskType);
                summary[taskType].sum = tasksOfGivenType.length;
                stageNames.forEach(stage => {
                    tasksInStage = tasksOfGivenType.filter(task => task.status === stage);
                    summary[taskType].stages[stage] = tasksInStage.length;
                })
            })
            console.log(summary);
            summaryComponent = taskTypes.map(taskType => {
                return (
                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <Badge color={setColorForType(taskType)}>
                                {taskType.toUpperCase()} :
                            </Badge>
                            <strong>
                                {summary[taskType].sum}
                            </strong>
                        </div>
                        {
                            stageNames.map(stage => {
                                return (
                                    <div className="d-flex justify-content-between align-items-center mb-1 ml-1">
                                        <Badge color="info">
                                            {stage}:
                                        </Badge>
                                        <strong>
                                            {summary[taskType].stages[stage]}
                                        </strong>
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            });
        }


        const spinner = (
            <Col className="text-center">
                <Spinner color="info" style={{ width: "15rem", height: "15rem" }} />
            </Col>
        );

        return (
            <div className="bg-light" >
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
                        <Col>
                            <Button color="success mb-3" block>
                                <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
                                Add Task
                            </Button>
                            <Card style={{ backgroundColor: "rgb(65, 1, 65)", borderRadius: "20px" }}>
                                <CardBody className="text-white p-2" >
                                    <h6 className="text-center">Summary</h6>
                                    {summaryComponent}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <TaskDetails task={this.state.currentTask}
                    toggleModal={this.toggleModal}
                    modalState={this.state.modalOpen} />
            </div>
        )
    }
}

export default Dashboard
