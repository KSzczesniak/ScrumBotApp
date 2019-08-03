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
import { nameToAvatarDict, fullname } from '../utility'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const TeamMember = ({ member, showMemberDetails }) => {
    const { firstname, lastname, image, role, skills } = member;
    return (
        <Col lg="3" md="6" sm="12" style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            <Card className="h-100 main-app-border" >
                <CardBody className="d-flex flex-column">
                    <img src={nameToAvatarDict[image]}
                        alt="user"
                        className="img-fluid rounded-circle align-self-center w-50 mb-3 main-app-border"
                        style={{ marginTop: "-75px" }}
                    />
                    <h3>{fullname(firstname, lastname)()}</h3>
                    <h5 className="text-muted">{role}</h5>
                    <Skills skills={skills} />
                    <div className="mt-auto">
                        <Brands brandNames={brandNames} />
                    </div>
                    <Button size="sm"
                        className="main-app-bg-color align-self-center"
                        onClick={() => showMemberDetails(member)}
                    >
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </Button>
                </CardBody>
            </Card>
        </Col >
    )
}

export default TeamMember
