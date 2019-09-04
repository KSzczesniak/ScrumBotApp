import React, { Fragment, useRef, useEffect } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'

import CheckListItem from '../../compoments/CheckListItem/CheckListItem'
import {
    sprintCharacteristics as sprintCharacteristicsRes,
    sprintReviewElements,
    dailyQuestions,
    retrospectivePurpose
} from '../resources'
import sprintImage from '../../assets/img/sprint.jpg'
import sprintPlanningImage from '../../assets/img/sprintPlanning.jpg'
import dailyScrumImage from '../../assets/img/dailyScrum.png'
import sprintRetrospective from '../../assets/img/sprintRetrospective.png'

import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

const Header = () => {
    return (
        <section className="bg-info text-light">
            <Container >
                <Row className="text-center py-4">
                    <Col>
                        <h1>Scrum Events</h1>
                        <p>
                            Prescribed events are used in Scrum to create regularity and to minimize the need for meetings
                            not defined in Scrum. All events are time-boxed events, such that every event has a maximum
                            duration. Other than the Sprint itself, which is a container for all other events, each event in Scrum is a
                            formal opportunity to inspect and adapt something.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

const SprintSection = ({ setRef }) => {
    const ref = useRef(null);
    useEffect(() => {
        setRef(ref);
    })

    const sprintCharacteristics = sprintCharacteristicsRes.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    return (
        <section className="text-muted" ref={ref}>
            <Container>
                <Row className="py-4">
                    <Col md="6">
                        <h2>The Sprint</h2>
                        <p>
                            The heart of Scrum is a Sprint, a time-box of one month or less during which a “Done”, useable,
                            and potentially releasable product Increment is created. Sprints have consistent durations
                            throughout a development effort. A new Sprint starts immediately after the conclusion of the
                            previous Sprint.
                            Sprints contain and consist of the Sprint Planning, Daily Scrums, the development work, the
                            Sprint Review, and the Sprint Retrospective.
                        </p>
                    </Col>
                    <Col md="6">
                        <img src={sprintImage} className="w-100 rounded" alt="po" />
                    </Col>

                </Row>
                <Row className="pb-4">
                    <Col md="6">
                        {sprintCharacteristics}
                    </Col>
                    <Col md="6" className="text-right">
                        <h4>Duration</h4>
                        <p>
                            Each Sprint may be considered a project with no more than a one-month horizon. Like projects,
                            Sprints are used to accomplish something. Each Sprint has a goal of what is to be built, a design
                            and flexible plan that will guide building it, the work, and the resultant product increment.
                        </p>
                    </Col>
                </Row>
                <Row className="pb-4">
                    <Col className="text-center">
                        <h4>Cancelling Sprint</h4>
                        <p>
                            A Sprint can be cancelled before the Sprint time-box is over. Only the Product Owner has the
                            authority to cancel the Sprint, although he or she may do so under influence from the
                            stakeholders, the Development Team, or the Scrum Master. When a Sprint is cancelled, any completed and “Done” Product Backlog items are reviewed. If
                            part of the work is potentially releasable, the Product Owner typically accepts it. All incomplete
                            Product Backlog Items are re-estimated and put back on the Product Backlog.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

const SprintPlanningSection = ({ setRef }) => {
    const ref = useRef(null);
    useEffect(() => {
        setRef(ref);
    })

    return (
        <section className="bg-info text-light" ref={ref}>
            <Container>
                <Row className="py-4">
                    <Col md="6">
                        <h2>Sprint Planning</h2>
                        <p>
                            The work to be performed in the Sprint is planned at the Sprint Planning. This plan is created by
                            the collaborative work of the entire Scrum Team.
                            Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint. For shorter
                            Sprints, the event is usually shorter. The Scrum Master ensures that the event takes place and
                            that attendants understand its purpose. The Scrum Master teaches the Scrum Team to keep it
                            within the time-box.

                        </p>
                    </Col>
                    <Col md="6">
                        <img src={sprintPlanningImage} className="w-75 rounded float-right" alt="po" />
                    </Col>
                </Row>
                <Row className="pb-4">
                    <Col>
                        <h4>What can be done?</h4>
                        <p>
                            The Development Team works to forecast the functionality that will be developed during the
                            Sprint. The Product Owner discusses the objective that the Sprint should achieve and the
                            Product Backlog items that, if completed in the Sprint, would achieve the Sprint Goal.  The number of items selected from the Product Backlog for the Sprint is solely up to the Development Team.
                        </p>
                    </Col>
                </Row>
                <Row className="pb-4">
                    <Col className="text-right">
                        <h4> How will the chosen work get done?</h4>
                        <p>
                            Having set the Sprint Goal and selected the Product Backlog items for the Sprint, the
                            Development Team decides how it will build this functionality into a “Done” product Increment
                            during the Sprint. The Product Backlog items selected for this Sprint plus the plan for delivering
                            them is called the Sprint Backlog. By the end of the Sprint Planning, the Development Team should be able to explain to the
                            Product Owner and Scrum Master how it intends to work as a self-organizing team to
                            accomplish the Sprint Goal and create the anticipated Increment.
                        </p>
                    </Col>
                </Row>
                <Row className="pb-4">
                    <Col>
                        <h4>Sprint goal</h4>
                        <p>
                            The Sprint Goal is an objective set for the Sprint that can be met through the implementation of
                            Product Backlog. The selected Product Backlog items deliver one coherent function, which can be the Sprint Goal.
                            The Sprint Goal can be any other coherence that causes the Development Team to work
                            together rather than on separate initiatives.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

const SprintReviewSection = ({ setRef }) => {
    const ref = useRef(null);
    useEffect(() => {
        setRef(ref);
    })

    const sprintReviewElems = sprintReviewElements.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    return (
        <section className="text-muted" ref={ref}>
            <Container>
                <Row className="py-4">
                    <Col md="6" className="align-self-center">
                        <h4>Most important elements: </h4>
                        {sprintReviewElems}
                    </Col>
                    <Col md="6" className="text-right">
                        <Row className="pb-4">
                            <Col>
                                <h2>Sprint Review</h2>
                                <p>
                                    A Sprint Review is held at the end of the Sprint to inspect the Increment and adapt the Product
                                    Backlog if needed. During the Sprint Review, the Scrum Team and stakeholders collaborate
                                    about what was done in the Sprint. This is an informal meeting, not a status meeting, and the presentation of the Increment is intended to elicit feedback and foster collaboration. This is at most a four-hour meeting for one-month Sprints. For shorter Sprints, the event is usually shorter.
                            </p>
                            </Col>
                        </Row>
                        <Row>
                            <img src={sprintImage} className="w-100 rounded" alt="po" />
                        </Row>
                    </Col>

                </Row>
            </Container>
        </section>
    )
};

const DailyScrumSection = ({ setRef }) => {
    const ref = useRef(null);
    useEffect(() => {
        setRef(ref);
    })

    const questions = dailyQuestions.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    return (
        <section className="bg-info text-light" ref={ref}>
            <Container>
                <Row className="py-4">
                    <Col md="6">
                        <h2>Daily Scrum</h2>
                        <p>
                            The Daily Scrum is a 15-minute time-boxed event for the Development Team. The Daily Scrum is
                            held every day of the Sprint. At it, the Development Team plans work for the next 24 hours. This
                            optimizes team collaboration and performance by inspecting the work since the last Daily Scrum
                            and forecasting upcoming Sprint work. The Daily Scrum is held at the same time and place each
                            day to reduce complexity. The Development Team uses the Daily Scrum to inspect progress toward the Sprint Goal and to
                            inspect how progress is trending toward completing the work in the Sprint Backlog. Daily Scrums improve communications, eliminate other meetings, identify impediments to development for removal, highlight and promote quick decision-making, and improve the Development Team’s level of knowledge
                        </p>
                    </Col>
                    <Col md="6">
                        <img src={dailyScrumImage} className="w-100 rounded float-right" alt="po" />
                    </Col>
                </Row>
                <Row className="pb-4">
                    <Col md={{ offset: 3 }}>
                        <h4>Key question that can help during daily scrum</h4>
                        <div className="m-auto">
                            {questions}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

const SprintRetrostectiveSection = ({ setRef }) => {
    const ref = useRef(null);
    useEffect(() => {
        setRef(ref);
    })

    const purpose = retrospectivePurpose.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    return (
        <section className="text-muted" ref={ref}>
            <Container>
                <Row className="py-4">
                    <Col md="4" className="align-self-center">
                        <img src={sprintRetrospective} className="w-100 rounded float-right" alt="po" />
                    </Col>
                    <Col md="8" className="text-right" >
                        <h2>Sprint Retrospective</h2>
                        <p>
                            The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan
                            for improvements to be enacted during the next Sprint. The Sprint Retrospective occurs after the Sprint Review and prior to the next Sprint Planning. This is at most a three-hour meeting for one-month Sprints. For shorter Sprints, the event is usually shorter. The Scrum Master participates as a peer team member in the meeting from the accountability over the Scrum process.
                        </p>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col md="6">
                        <h4>Most important elements: </h4>
                        {purpose}
                    </Col>
                    <Col md="6" className="text-right">
                        <h4>Takeawyas </h4>
                        <p>
                            By the end of the Sprint Retrospective, the Scrum Team should have identified improvements
                            that it will implement in the next Sprint. Implementing these improvements in the next Sprint is
                            the adaptation to the inspection of the Scrum Team itself
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

const Events = ({ sprintRef, sprintPlanningRef, sprintReviewRef, dailyScrumRef, sprintRetroRef,
    setSprintRef, setSprintPlanningRef, setSprintReviewRef, setSprintRetroRef, setDailyScrumRef,
    scrollElem, resetScroll }) => {

    const sectionToRefDict = {
        "sprint": sprintRef,
        "planning": sprintPlanningRef,
        "review": sprintReviewRef,
        "daily": dailyScrumRef,
        "retro": sprintRetroRef
    }

    useEffect(() => {
        const ref = sectionToRefDict[scrollElem];
        console.log(scrollElem)
        if (scrollElem && ref && ref.current) {
            scrollToRef(sectionToRefDict[scrollElem])
            resetScroll();
        }
    })

    return (
        <Fragment>
            <Header />
            <SprintSection setRef={setSprintRef} />
            <SprintPlanningSection setRef={setSprintPlanningRef} />
            <SprintReviewSection setRef={setSprintReviewRef} />
            <DailyScrumSection setRef={setDailyScrumRef} />
            <SprintRetrostectiveSection setRef={setSprintRetroRef} />
        </Fragment>
    )
}

const mapPropsToState = state => {
    return {
        sprintRef: state.events.sprintRef,
        sprintPlanningRef: state.events.sprintPlanningRef,
        sprintReviewRef: state.events.sprintReviewRef,
        dailyScrumRef: state.events.dailyScrumRef,
        sprintRetroRef: state.events.sprintRetrostectiveRef,
        scrollElem: state.chat.scroll,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSprintRef: ref => dispatch(actions.setSprintRef(ref)),
        setSprintPlanningRef: ref => dispatch(actions.setSprintPlanningRef(ref)),
        setSprintReviewRef: ref => dispatch(actions.setSprintReviewRef(ref)),
        setDailyScrumRef: ref => dispatch(actions.setDailyScrumRef(ref)),
        setSprintRetroRef: ref => dispatch(actions.setSprintRetroRef(ref)),
        resetScroll: () => dispatch(actions.resetScroll())
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(Events)
