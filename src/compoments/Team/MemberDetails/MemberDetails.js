import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'

const MemberDetails = ({ member, inputChanged, typeChanged }) => {
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
                <Input type="select" name="role" >
                    <option>Software Developer</option>
                    <option>Scrum Master</option>
                    <option>Product Owner</option>
                </Input>
            </FormGroup>
        </Form>
    )
}

export default MemberDetails;
