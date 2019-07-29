import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'

import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer + " bg-dark text-light py-3"}>
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
