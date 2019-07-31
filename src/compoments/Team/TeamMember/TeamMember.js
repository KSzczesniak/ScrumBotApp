import React from 'react'
import {
    Col,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const TeamMember = ({ name, img, role, skills }) => {

    const brandNamesToIconsDict = { facebook: faFacebook, twitter: faTwitter, instagram: faInstagram };
    const brands = Object.keys(brandNamesToIconsDict).map(brand => {
        return (
            <a href={`http://${brand}.com`} className="mx-4 mt-3 mb-1">
                <FontAwesomeIcon icon={brandNamesToIconsDict[brand]} />
            </a>
        )
    });
    const skillItems = skills.map(skill => {
        return (
            <ListGroupItem className="border-0 p-1">
                <FontAwesomeIcon icon={faCheck} /> {skill}
            </ListGroupItem>
        );
    });

    return (
        <Col lg="3" md="6" sm="12" className="mb-5">
            <Card className="h-100" style={{ border: "2px solid rgb(65, 1, 65)" }}>
                <CardBody>
                    <img src={img} alt="user" className="img-fluid rounded-circle w-50 mb-3" />
                    <h3>{name}</h3>
                    <h5 className="text-muted">{role}</h5>
                    <ListGroup>
                        {skillItems}
                    </ListGroup>
                    <div className="d-flex justify-content-center">
                        {brands}
                    </div>
                </CardBody>
            </Card>
        </Col >
    )
}

export default TeamMember
