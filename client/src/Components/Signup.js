import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';


function Signup({setUser}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const history = useNavigate("");
    const [passwordConfirmation, setPasswordConfirmation] = useState(null);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: username, 
              password: password,
              password_confirmation: passwordConfirmation,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                setUser(user)
                history("/")
                window.location.reload(false);
              });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });

    }

    return (
        <div>
            <Container id="signUpContainer">
                {errors}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="loginLabels">Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <Form.Text className="text-muted">
                        Choose a name that says "you"!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="loginLabels">Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Form.Text className="text-muted">
                        Make it unique and strong!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                        <Form.Text className="text-muted">
                        One more time!
                        </Form.Text>
                    </Form.Group>

                    <div className="submitButtonContainer">
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Signup;