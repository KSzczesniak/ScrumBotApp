import React from 'react'

import {
    Container,
    Row,
    Col,
} from 'reactstrap'

const Footer = () => {
    return (
        <footer className=" bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h3>ScrumBot</h3>
                        <p>Copyright &copy; <span >{new Date().getFullYear()}</span></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
