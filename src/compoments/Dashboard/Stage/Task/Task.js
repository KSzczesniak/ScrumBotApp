import React from 'react'
import {
    Button,
    Card,
    CardBody,
    Badge,
} from 'reactstrap'

import { setColorForType } from '../../utility'
import maleAvatar from '../../../../assets/img/avatars/maleAvatar.jpg'
import femaleAvatar from '../../../../assets/img/avatars/femaleAvatar.jpg'


const Task = ({ task, showTaskDetails }) => {
    return (
        <Card className="mb-3 bg-light" color={setColorForType(task.type)} outline>
            <CardBody className="p-2">
                <Badge color={setColorForType(task.type)}>{task.type.toUpperCase()}</Badge>
                <div className="float-right d-inline">
                    <img src={maleAvatar}
                        className="rounded-circle"
                        width="35"
                        height="35"
                        alt="avatar" />
                </div>
                <div className="mt-1 mx-0" style={{ fontSize: "0.7rem" }}>
                    {task.header}
                </div>
                <Button className="mt-3" color="info" outline size="sm" onClick={() => showTaskDetails(task)}>
                    Details
                </Button>
            </CardBody>
        </Card>
    )
}

export default Task;
