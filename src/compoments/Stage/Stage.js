import React from 'react'
import {
    Button,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
    CardFooter
} from 'reactstrap'

const Stage = props => {

    return (
        <Card className="mb-3" color="info" outline>
            <CardHeader className="bg-info">
                <CardTitle tag="h5" className="text-light" >{props.name}</CardTitle>
            </CardHeader>
            <CardBody className="p-3 overflow-auto">
                {props.children}

            </CardBody>
            <CardFooter>
                <Button color="info" block>
                    Add task
                </Button>
            </CardFooter>
        </Card>
    )
}
export default Stage
