import React from 'react'
import {
    Badge,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

import { setColorForType } from '../utility'

const TaskDetails = ({ task, inputChanged, typeChanged }) => {
    return (
        <Form>
            <FormGroup row className="align-items-center">
                <Label sm={2} className="text-right">Type</Label>
                <Col sm={10}>
                    <UncontrolledDropdown size="sm" >
                        <DropdownToggle caret color="info-outline" className="my-1 mr-1 float-left h-6">
                            <Badge color={setColorForType(task.type)} >
                                {task.type.toUpperCase()}
                            </Badge>
                        </DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem size="sm" className="text-center" onClick={() => typeChanged("type", "task")}>
                                <Badge color={setColorForType("task")} >
                                    {"task".toUpperCase()}
                                </Badge>
                            </DropdownItem>
                            <DropdownItem className="text-center">
                                <Badge color={setColorForType("story")} onClick={() => typeChanged("type", "story")}>
                                    {"story".toUpperCase()}
                                </Badge>
                            </DropdownItem>
                            <DropdownItem className="text-center">
                                <Badge color={setColorForType("epic")} onClick={() => typeChanged("type", "epic")}>
                                    {"epic".toUpperCase()}
                                </Badge>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} className="text-right">Header</Label>
                <Col sm={10}>
                    <Input value={task.header}
                        name="header"
                        onChange={inputChanged} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} className="text-right">Description</Label>
                <Col sm={10}>
                    <Input type="textarea"
                        name="description"
                        value={task.description}
                        onChange={inputChanged}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} className="text-right">Estimation</Label>
                <Col sm={10}>
                    <Input value={task.estimation}
                        name="estimation"
                        // type="number"
                        onChange={inputChanged} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} className="text-right">Assignee</Label>
                <Col sm={10}>
                    <Input value={task.assignee}
                        name="assignee"
                        onChange={inputChanged} />
                </Col>
            </FormGroup>
            <FormGroup row className="align-items-center">
                <Label sm={2} className="text-right">Status</Label>
                <Col sm={10}>
                    <UncontrolledDropdown size="sm" >
                        <DropdownToggle caret color="info-outline" className="my-1 mr-1 float-left h-6">
                            <Badge color="info"  >
                                {task.status.toUpperCase()}
                            </Badge>
                        </DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem size="sm" className="text-center" onClick={() => typeChanged("status", "To Do")}>
                                <Badge color="info" >
                                    {"To Do".toUpperCase()}
                                </Badge>
                            </DropdownItem>
                            <DropdownItem className="text-center">
                                <Badge color="info" onClick={() => typeChanged("status", "In Progress")}>
                                    {"In Progress".toUpperCase()}
                                </Badge>
                            </DropdownItem>
                            <DropdownItem className="text-center">
                                <Badge color="info" onClick={() => typeChanged("status", "In Review")}>
                                    {"In Review".toUpperCase()}
                                </Badge>
                            </DropdownItem>
                            <DropdownItem className="text-center">
                                <Badge color="info" onClick={() => typeChanged("status", "Resolved")}>
                                    {"Resolved".toUpperCase()}
                                </Badge>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} className="text-right">Start Date</Label>
                <Col sm={10}>
                    <Input value={task.startDate}
                        name="startDate"
                        onChange={inputChanged} />

                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} className="text-right">End Date</Label>
                <Col sm={10}>
                    <Input value={task.endDate}
                        name="endDate"
                        onChange={inputChanged} />
                </Col>
            </FormGroup>
        </Form>
    )
}

export default TaskDetails;
