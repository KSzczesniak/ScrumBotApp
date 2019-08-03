import React, { Fragment } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

const Header = () => {
    return (
        <section className="bg-dark">
            <Container >
                <Row className="text-center text-light p-4">
                    <Col>
                        <h1>The Scrum Team</h1>
                        <p>
                            The Scrum Team consists of a Product Owner, the Development Team, and a Scrum Master.
                            Scrum Teams are self - organizing and cross - functional.Self - organizing teams choose how best to
                            accomplish their work, rather than being directed by others outside the team.
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


const Roles = () => {
    return (
        <Fragment>
            <Header />
        </Fragment>
    )
}

export default Roles
