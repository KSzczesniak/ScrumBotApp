import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Spinner
} from 'reactstrap';

import * as actions from '../../store/actions/index';
import classes from './Team.module.css';
import TeamMember from '../../compoments/Team/TeamMember/TeamMember';
import { nameToAvatarDict } from '../../compoments/Team/utility'

class Team extends Component {

    componentDidMount() {
        this.props.fetchPersons();
    }

    render() {
        const members = this.props.persons ? this.props.persons.map(person => {
            return (
                <TeamMember key={person.id}
                    name={person.name}
                    img={nameToAvatarDict[person.image]}
                    role={person.role}
                    skills={person.skills}
                />
            )
        }) : null;

        const membersSection = (
            <Row>
                {members}
            </Row>
        );


        const spinner = (
            <div className="text-center">
                <Spinner color="info" style={{ width: "15rem", height: "15rem" }} />
            </div>
        );

        return (
            <div className={classes.teamBg} >
                <div className={classes.lightOverlay} >
                    <Container className="text-center">
                        <h1>Team</h1>
                        <hr />
                        {this.props.persons ? membersSection : spinner}
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        persons: state.team.persons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPersons: () => dispatch(actions.fetchPersons())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
