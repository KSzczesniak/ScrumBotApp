import React from 'react'
import {
    Button,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
} from 'reactstrap'

const Stage = props => {

    return (
        <Card className="mb-3">
            <CardHeader>
                <CardTitle tag="h5">{props.name}</CardTitle>
            </CardHeader>
            <CardBody className="p-3">
                {props.children}
                <Button color="primary" block>
                    Add task
                </Button>
            </CardBody>
        </Card>
    )
}
export default Stage
