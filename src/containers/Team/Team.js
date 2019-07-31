import React, { Component } from 'react'
import {
    Container,
    Row,
} from 'reactstrap'

import classes from './Team.module.css'
import TeamMember from '../../compoments/Team/TeamMember/TeamMember'
import manImage1 from '../../assets/img/team/men/man1.jpg'
import manImage2 from '../../assets/img/team/men/man2.jpg'
import womanImage1 from '../../assets/img/team/women/woman1.jpg'



class Team extends Component {

    state = {
        persons: [
            {
                name: 'Simon Williams',
                role: 'Software Developer',
                image: manImage1,
                skills: [
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor'
                ]
            },
            {
                name: 'Jon Smith',
                role: 'Scrum Master',
                image: manImage2,
                skills: [
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor'
                ]
            },
            {
                name: 'Cloe Kane',
                role: 'Product Owner',
                image: womanImage1,
                skills: [
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor'
                ]
            },
            {
                name: 'Jon Smith',
                role: 'Scrum Master',
                image: manImage2,
                skills: [
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor'
                ]
            },
            {
                name: 'Simon Williams',
                role: 'Software Developer',
                image: manImage1,
                skills: [
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor'
                ]
            },
            {
                name: 'Cloe Kane',
                role: 'Product Owner',
                image: womanImage1,
                skills: [
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor'
                ]
            },
            {
                name: 'Jon Smith',
                role: 'Scrum Master',
                image: manImage2,
                skills: [
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor'
                ]
            },
            {
                name: 'Cloe Kane',
                role: 'Product Owner',
                image: womanImage1,
                skills: [
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor',
                    'Lorem ipsum dolor'
                ]
            },
        ]
    }

    render() {

        console.log(JSON.stringify(this.state));

        const members = this.state.persons.map(person => {
            return (
                <TeamMember name={person.name}
                    img={person.image}
                    role={person.role}
                    skills={person.skills}
                />
            )
        });

        return (
            <div className={classes.teamBg} >
                <div className={classes.lightOverlay} >
                    <Container className="text-center">
                        <h1>Team</h1>
                        <hr />
                        <Row>
                            {members}

                        </Row>
                    </Container>
                </div>
            </div>


        )
    }
}

export default Team
