import React, { Fragment, useEffect, useRef } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import CheckListItem from '../../compoments/CheckListItem/CheckListItem'
import {
    scrumMasterServiceToDT,
    scrumMasterServiceToOrg,
    scrumMasterServiceToPO,
    productOwnerResponsibilities,
    developmentTeamCharacteristics
} from '../resources'

import productOwnershipImage from '../../assets/img/productOwnership.png'
import productOwnerImage from '../../assets/img/productOwner.jpg'
import scrumMasterImage from '../../assets/img/scrumMaster.png'
import teamImage from '../../assets/img/developmentTeam.png'

import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'


const Header = () => {
    return (
        <section className="bg-dark text-light">
            <Container >
                <Row className="text-center py-4">
                    <Col>
                        <h1>The Scrum Team</h1>
                        <p>
                            The Scrum Team consists of a Product Owner, the Development Team, and a Scrum Master.
                            Scrum Teams are self-organizing and cross-functional. The teams choose how best to
                            accomplish their work, rather than being directed by others outside the team.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

const ProductOwnerSection = ({ setRef }) => {
    const ref = useRef(null);
    useEffect(() => {
        setRef(ref);
    })

    const responsibilities = productOwnerResponsibilities.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    return (
        <section className="text-muted" ref={ref}>
            <Container>
                <Row className="pt-4">
                    <Col md="4">
                        <img src={productOwnerImage} className="w-100 rounded-circle" alt="po" />
                    </Col>
                    <Col md="8" className="text-right">
                        <h2>Product Owner</h2>
                        <p>
                            The Product Owner is responsible for maximizing the value of the product resulting from work
                            of the Development Team. How this is done may vary widely across organizations, Scrum Teams,
                            and individuals. The Product Owner is the sole person responsible for managing the Product Backlog.
                        </p>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col md="8" className="m-auto">
                        <h5>Backlog management includes:</h5>
                        {responsibilities}
                    </Col>
                    <Col md="4">
                        <img src={productOwnershipImage} className="w-100 rounded-circle" alt="por" />
                    </Col>


                </Row>
            </Container>
        </section>
    )
};

const ScrumMasterSection = ({ setRef }) => {
    const ref = useRef(null);
    useEffect(() => {
        setRef(ref);
    })

    const smServiceToPo = scrumMasterServiceToPO.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    const smServiceToDt = scrumMasterServiceToDT.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    const smServiceToOrg = scrumMasterServiceToOrg.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    return (
        <section className="bg-dark text-light" ref={ref}>
            <Container>
                <Row className="pt-4">
                    <Col md="8">
                        <h2>Scrum Master</h2>
                        <p>
                            The Scrum Master is responsible for promoting and supporting Scrum as defined in the Scrum
                            Guide. Scrum Masters do this by helping everyone understand Scrum theory, practices, rules,
                            and values.
                            The Scrum Master is a servant-leader for the Scrum Team. The Scrum Master helps those
                            outside the Scrum Team understand which of their interactions with the Scrum Team are helpful
                            and which aren’t. The Scrum Master helps everyone change these interactions to maximize the
                            value created by the Scrum Team.
                        </p>
                    </Col>
                    <Col md="4">
                        <img src={scrumMasterImage} className="w-100 rounded-circle" alt="po" />
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col md="4">
                        <h5>SM serves the Product Owner by:</h5>
                        {smServiceToPo}
                    </Col>
                    <Col md="4">
                        <h5>SM serves the Development Team by:</h5>
                        {smServiceToDt}
                    </Col>
                    <Col md="4">
                        <h5>SM serves the Organization by:</h5>
                        {smServiceToOrg}
                    </Col>

                </Row>
            </Container>
        </section>
    )
};

const DevelopmentTeamSection = ({ setRef }) => {
    const ref = useRef(null);
    useEffect(() => {
        setRef(ref);
    })

    const characteristics = developmentTeamCharacteristics.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    return (
        <section className="text-muted" ref={ref}>
            <Container>
                <Row className="pt-4">
                    <Col md="4">
                        <img src={teamImage} className="w-100 rounded" alt="po" />
                    </Col>
                    <Col md="8" className="text-right">
                        <h2>Development Team</h2>
                        <p>
                            The Development Team consists of professionals who do the work of delivering a potentially
                            releasable Increment of “Done” product at the end of each Sprint. A “Done” increment is
                            required at the Sprint Review. Only members of the Development Team create the Increment.
                            Development Teams are structured and empowered by the organization to organize and
                            manage their own work. The resulting synergy optimizes the Development Team’s overall
                            efficiency and effectiveness.
                        </p>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col md="8" className="m-auto">
                        <h5>Development Teams have the following characteristics:</h5>
                        {characteristics}
                    </Col>
                    <Col md="4" className="text-right">
                        <h5>Development Team Size</h5>
                        <p>
                            Optimal Development Team size is small enough to remain nimble and large enough to
                            complete significant work within a Sprint. Fewer than three Development Team members
                            decrease interaction and results in smaller productivity gains. Smaller Development Teams may
                            encounter skill constraints during the Sprint, causing the Development Team to be unable to
                            deliver a potentially releasable Increment. Having more than nine members requires too much
                            coordination.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

const scrollToRef = ref => {
    console.log('scroll to ref')
    setTimeout(() => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 600)
}

const Roles = ({ poRef, smRef, devRef,
    setPoRef, setSmRef, setDevRef,
    scrollElem, resetScroll }) => {

    const sectionToRefDict = {
        "po": poRef,
        "sm": smRef,
        "dev": devRef
    }

    useEffect(() => {
        const ref = sectionToRefDict[scrollElem];
        if (scrollElem && ref && ref.current) {
            scrollToRef(sectionToRefDict[scrollElem])
            resetScroll();
        }
    })

    return (
        <Fragment>
            <Header />
            <ProductOwnerSection setRef={setPoRef} />
            <ScrumMasterSection setRef={setSmRef} />
            <DevelopmentTeamSection setRef={setDevRef} />
        </Fragment>
    )
}

const mapPropsToState = state => {
    return {
        poRef: state.roles.poRef,
        smRef: state.roles.smRef,
        devRef: state.roles.devRef,
        scrollElem: state.chat.scroll,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPoRef: ref => dispatch(actions.setPoRef(ref)),
        setSmRef: ref => dispatch(actions.setSmRef(ref)),
        setDevRef: ref => dispatch(actions.setDevRef(ref)),
        resetScroll: () => dispatch(actions.resetScroll())
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(Roles)
