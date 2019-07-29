import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'

import CheckListItem from '../../compoments/CheckListItem/CheckListItem'
// import Footer from '../../compoments/UI/Footer/Footer'
import classes from './Landing.module.css'


const Header = () => (
    <section className={classes.homeSection}>
        <div className={classes.darkOverlay}>
            <Container >
                <br />
                <Row>
                    <Col xl="6">
                        <h1 className="display-4">Best Ways To Learn <strong>Scrum</strong> !</h1>
                        <br />
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
                        <CheckListItem>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis eius
                                    doloremque! Ipsam, aperiam vero.
                        </CheckListItem>

                    </Col>
                    <Col xl="6" className="align-items-center d-flex justify-content-center">
                        <Link to="/home" >
                            <Button color="success" size="lg">
                                Let's start!
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
)

// const Body = () => (
//     <section className="py-5">

//     </section>
// )

class Landing extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {/* <Body /> */}
                {/* <Footer /> */}
            </Fragment>
        )
    }
}

export default Landing
