import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);
    const updateAPIData = () => {
        console.log(firstName, lastName, checkbox);
        axios.put(`https://6257d3ca0c918296a48ba2f5.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        })

    }
    return (
        <div>
            <Form className="create-form" onSubmit={updateAPIData}>
                <Form.Field>
                    <label>First Name</label>
                    <input defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input defaultValue={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button type='submit'>Update</Button>
            </Form>
        </div>
    )
}   