import React from 'react';
import {
    Col,
    Card,
    CardBody,
} from 'reactstrap';
import { brandNames } from '../utility';
import Brands from '../../Brands/Brands';
import Skills from './Skills/Skills'
const TeamMember = ({ name, img, role, skills }) => {
    return (
        <Col lg="3" md="6" sm="12" className="mb-5">
            <Card className="h-100" style={{ border: "2px solid rgb(65, 1, 65)" }}>
                <CardBody>
                    <img src={img} alt="user" className="img-fluid rounded-circle w-50 mb-3" />
                    <h3>{name}</h3>
                    <h5 className="text-muted">{role}</h5>
                    <Skills skills={skills} />
                    <Brands brandNames={brandNames} />
                </CardBody>
            </Card>
        </Col >
    )
}

export default TeamMember
