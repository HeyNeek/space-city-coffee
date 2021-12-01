import React, {useState} from 'react';
import {NavLink, Routes, Route} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function Login({setUser}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, 
            password}),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user)
            });
          } else {
            r.json().then((err) => {setErrors(err.error)
            console.log(err.error)
            });
          }
        });

    }

    return (
        <div>
            <Container id="loginContainer">
                {/* <div id="loginH1"><h1>Welcome Back!</h1></div> */}
                {errors}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="loginLabels">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="loginLabels">Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <br/>
                    <div className="submitButtonContainer">
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </Form>
                <br/>
                <Nav id="signUpLink">
                    <Nav.Link as={NavLink} to="/signup">Don't have an account? Sign up here!</Nav.Link>
                </Nav>
            </Container>
        </div>
    )
}

export default Login;