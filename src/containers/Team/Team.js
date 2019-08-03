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
import CustomizedModal from '../../compoments/UI/CustomizedModal/CustomizedModal'
import { defaultMember, fullname } from '../../compoments/Team/utility'
import MemberDetails from '../../compoments/Team/MemberDetails/MemberDetails';


class Team extends Component {

    componentDidMount() {
        this.props.fetchMembers();
    }

    resetMember = () => {
        const id = parseInt(Object.values(this.props.members)[this.props.members.length - 1].id) + 1;
        const newMember = {
            ...defaultMember,
            id: id
        }
        this.props.currentMemberChanged(newMember);
    };

    showMemberDetails = member => {
        this.props.currentMemberChanged(member);
        this.props.modalToggled();
    };

    addMemberHandler = () => {
        this.resetMember();
        this.props.modalToggled();
    };

    deleteMemberHandler = Member => {
        this.props.memberDeleted(Member);
        this.props.modalToggled();
    };

    saveMemberHandler = newMember => {
        this.props.memberSaved(newMember);
        this.props.modalToggled();
    };

    inputChangedHandler = event => {
        const modifiedMember = {
            ...this.props.currentMember,
            [event.target.name]: event.target.value
        }
        this.props.currentMemberChanged(modifiedMember);
    };

    multiSelectChangedHandler = event => {
        console.log(event.target.options)
        const modifiedMember = {
            ...this.props.currentMember,
            [event.target.name]: [...event.target.options].filter(({ selected }) => selected).map(({ value }) => value)
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
                    member={member}
                    showMemberDetails={this.showMemberDetails}
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
                    <CustomizedModal toggle={() => this.props.modalToggled()}
                        isOpen={this.props.modalOpen}
                        saveHandler={this.saveMemberHandler}
                        deleteHandler={this.deleteMemberHandler}
                        header={fullname(this.props.currentMember.firstname, this.props.currentMember.lastname)}
                    >
                        <MemberDetails member={this.props.currentMember}
                            inputChanged={this.inputChangedHandler}
                            multiSelectChanged={this.multiSelectChangedHandler}
                        />
                    </CustomizedModal>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        members: state.team.members,
        currentMember: state.team.currentMember,
        modalOpen: state.dashboard.modalOpen
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMembers: () => dispatch(actions.fetchMembers()),
        currentMemberChanged: newMember => dispatch(actions.currentMemberChanged(newMember)),
        memberDeleted: () => dispatch(actions.memberDeleted()),
        memberSaved: () => dispatch(actions.memberSaved()),
        modalToggled: () => dispatch(actions.modalToggled())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
