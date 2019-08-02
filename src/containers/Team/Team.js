import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Col,
    Spinner,
    Button
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import * as actions from '../../store/actions/index';
import classes from './Team.module.css';
import TeamMember from '../../compoments/Team/TeamMember/TeamMember';
import { nameToAvatarDict, defaultMember } from '../../compoments/Team/utility'


class Team extends Component {

    componentDidMount() {
        this.props.fetchMembers();
    }


    resetMember = () => {
        const id = parseInt(Object.values(this.props.Members)[this.props.Members.length - 1].id) + 1;
        const newMember = {
            ...defaultMember,
            id: id
        }
        this.props.currentMember(newMember);
    };

    showMemberDetails = currentMember => {
        this.props.currentMemberChanged(currentMember);
        this.props.modalToggled();
    };

    addMemberHandler = () => {
        this.resetMember();
        this.props.modalToggled();
    };

    deleteMemberHandler = Member => {
        this.props.MemberDeleted(Member);
        this.props.modalToggled();
    };

    saveMemberHandler = newMember => {
        this.props.MemberSaved(newMember);
        this.props.modalToggled();
    };

    inputChangedHandler = event => {
        const modifiedMember = {
            ...this.props.currentMember,
            [event.target.name]: event.target.value
        }
        this.props.currentMemberChanged(modifiedMember);
    };

    typeChangedHandler = (property, value) => {
        const modifiedMember = {
            ...this.props.currentMember,
            [property]: value
        }
        this.props.currentMemberChanged(modifiedMember);
    }

    render() {
        const members = this.props.members ? this.props.members.map(member => {
            return (
                <TeamMember key={member.id}
                    name={member.name}
                    img={nameToAvatarDict[member.image]}
                    role={member.role}
                    skills={member.skills}
                />
            )
        }) : null;

        const spinner = (
            <Col className="text-center">
                <Spinner color="info" style={{ width: "15rem", height: "15rem" }} />
            </Col>
        );

        return (
            <div className={classes.teamBg} >
                <div className={classes.lightOverlay} >
                    <Container className="text-center">
                        <h1>Team</h1>
                        <hr />
                        <Row>
                            <Button color="success"
                                className="m-3"
                                onClick={this.addMemberHandler}>
                                <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
                                Add Member
                            </Button>
                        </Row>
                        <Row>
                            {this.props.members ? members : spinner}
                        </Row>
                    </Container>
                    {/* <MemberDetails task={this.props.currentTask}
                        toggleModal={this.toggleModal}
                        modalState={this.props.modalOpen}
                        saveTask={this.saveTaskHandler}
                        deleteTask={this.deleteTaskHandler}
                        inputChanged={this.inputChangedHandler}
                        typeChanged={this.typeChangedHandler} /> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        members: state.team.members
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMembers: () => dispatch(actions.fetchMembers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
