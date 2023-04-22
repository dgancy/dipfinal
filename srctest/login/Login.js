import React, {useState} from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='text' 
                            onChange={e => setUserName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' 
                            onChange={e => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button type='submit'>Sign in</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }