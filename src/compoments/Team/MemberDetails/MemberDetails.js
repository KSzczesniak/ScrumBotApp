import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'

import { roles, skills } from '../utility'

const roleOptions = roles.map((role, index) => <option key={index}>{role}</option>);
const skillOptions = skills.map((skill, index) => <option key={index}>{skill}</option>)

const MemberDetails = ({ member, inputChanged, multiSelectChanged }) => {

    return (
        <Form>
            <FormGroup >
                <Label>Firstname</Label>
                <Input value={member.firstname}
                    name="firstname"
                    onChange={inputChanged} />
            </FormGroup>
            <FormGroup >
                <Label>Lastname</Label>
                <Input value={member.lastname}
                    name="lastname"
                    onChange={inputChanged} />
            </FormGroup>
            <FormGroup>
                <Label className="text-right">Type</Label>
                <Input type="select" name="role" value={member.role} onChange={inputChanged} >
                    {roleOptions}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label className="text-right">Skills</Label>
                <Input type="select" name="skills" multiple value={member.skills} onChange={multiSelectChanged} >
                    {skillOptions}
                </Input>
            </FormGroup>
        </Form>
    )
}

export default MemberDetails;
