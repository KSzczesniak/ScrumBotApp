import React from 'react'
import {
    Card,
    CardTitle,
    CardBody,
    CardHeader,
} from 'reactstrap'

const Stage = props => {

    return (
        <Card className="h-100" color="info" outline>
            <CardHeader className="bg-info p-2 text-center">
                <CardTitle tag="h5" className="text-light mb-0" >{props.name}</CardTitle>
            </CardHeader>
            <CardBody className="px-3 pt-3 pb-0 overflow-auto">
                {props.children}
            </CardBody>
        </Card>
    )
}
export default Stage
