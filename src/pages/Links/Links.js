import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    ListGroup,
    ListGroupItem
} from 'reactstrap'

const pages = ['Roles', 'Dashboard', 'Dashboard'];

const Links = () => {
    const links = pages.map((page, i) => (
        <ListGroupItem key={i} className="border-0 bg-light">
            <Link to={`/${page.toLowerCase()}`}>{page}</Link>
        </ListGroupItem>
    ));
    return (
        <Container className="text-center">
            <h2>Links</h2>
            <hr />
            <h6>This is a temporary version to test links which are used by bot.</h6>
            <hr />
            <ListGroup>
                {links}
            </ListGroup>
        </Container>
    )
}

export default Links
