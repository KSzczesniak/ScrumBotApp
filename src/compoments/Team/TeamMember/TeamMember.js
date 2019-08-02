import React from 'react';
import {
    Col,
    Card,
    CardBody,
    Button
} from 'reactstrap';
import { brandNames } from '../utility';
import Brands from '../../Brands/Brands';
import Skills from './Skills/Skills'

const TeamMember = ({ name, img, role, skills }) => {
    return (
        <Col lg="3" md="6" sm="12" style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            <Card className="h-100 main-app-border" >
                <CardBody className="d-flex flex-column">
                    <img src={img}
                        alt="user"
                        className="img-fluid rounded-circle align-self-center w-50 mb-3 main-app-border"
                        style={{ marginTop: "-75px" }}
                    />
                    <h3>{name}</h3>
                    <h5 className="text-muted">{role}</h5>
                    <Skills skills={skills} />
                    <div className="mt-auto">
                        <Brands brandNames={brandNames} />
                    </div>
                    <Button size="sm" className="pb-3 pt-0 px-3 main-app-bg-color align-self-center">
                        <h4 className="m-0">...</h4>
                    </Button>
                </CardBody>
            </Card>
        </Col >
    )
}

export default TeamMember
