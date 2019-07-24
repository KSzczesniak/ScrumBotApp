import React from 'react'

import {
    Button,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
} from 'reactstrap'

const Task = () => {
    return (
        <Card className="mb-3">
            <CardHeader>
                <CardTitle tag="h6">Task</CardTitle>
            </CardHeader>
            <CardBody className="p-3">
                <div>
                    Nam pretium turpis et arcu. Duis arcu. Nam pretium turpis et arcu. Duis arcu.
                </div>
                <Button color="primary" size="sm">
                    Add task
                </Button>
            </CardBody>
        </Card>
    )
}

export default Task
