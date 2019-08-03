import React, { Fragment } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import CheckListItem from '../../compoments/CheckListItem/CheckListItem'
import {
    sprintCharacteristics as sprintCharacteristicsRes
} from '../resources'
import sprintImage from '../../assets/img/sprint.jpg'
import sprintPlanningImage from '../../assets/img/sprintPlanning.jpg'

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

const SprintSection = () => {
    const sprintCharacteristics = sprintCharacteristicsRes.map((item, i) => (
        <CheckListItem key={i}>
            {item}
        </CheckListItem>
    ));
    return (
        <section className="text-muted">
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

const SprintPlanningSection = () => {
    return (
        <section className="bg-info text-light">
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


const Events = () => {
    return (
        <Fragment>
            <Header />
            <SprintSection />
            <SprintPlanningSection />
        </Fragment>
    )
}

export default Events
