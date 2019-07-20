import React, { Component, Fragment } from 'react'

import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'



import CheckListItem from '../../compoments/ListItem/CheckListItem'


const Header = () => (
    <section className="py-5">
        <Container>
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
                <Col xl="6">

                </Col>
            </Row>
        </Container>
    </section>
)

const Body = () => (
    <section className="py-5">

    </section>
)

const Footer = () => (
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
