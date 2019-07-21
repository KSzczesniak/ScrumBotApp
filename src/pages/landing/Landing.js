import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'

import CheckListItem from '../../compoments/ListItem/CheckListItem'
import Footer from '../../compoments/Footer/Footer'
import classes from './Landing.module.css'


const Header = () => (
    <section className={classes.homeSection}>
        <div className={classes.darkOverlay}>
            <Container >
                <Row>
                    <Col xl="6">
                        <h1 class="display-4">Best Ways To Learn <strong>Scrum</strong> !</h1>
                        <CheckListItem>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis eius
                                    doloremque! Ipsam, aperiam vero.
                        </CheckListItem>
                        <CheckListItem>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis eius
                                    doloremque! Ipsam, aperiam vero.
                        </CheckListItem>
                        <CheckListItem>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis eius
                                    doloremque! Ipsam, aperiam vero.
                        </CheckListItem>

                    </Col>
                    <Col xl="6" className="text-center">
                        <Link to="/home">
                            <Button color="light" size="lg">
                                Let's start!
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
)

const Body = () => (
    <section className="py-5">

    </section>
)



class Landing extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Body />
                <Footer />
            </Fragment>
        )
    }
}

export default Landing
