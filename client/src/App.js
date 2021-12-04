import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, NavLink, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Shops from './Components/Shops';
import Favorites from './Components/Favorites';
import Login from './Components/Login';
import Signup from './Components/Signup';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo-removebg-preview.png';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    refresh()
  }, []);

  function refresh(){
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {console.log(user)
          setUser(user)
        }); 
      }
    })
  }

  function logoutHandler() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand id="navbarLogo" as={Link} to="/"><img id="logo" alt="logo" src={logo}/>Space City Coffee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/explore">Shops</Nav.Link>
              <Nav.Link as={NavLink} to="/favorites">Favorites</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              {user ? <Button onClick={logoutHandler}>Logout {user.name}</Button> : <Nav.Link id="loginNav" as={NavLink} to="/login">Login</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Shops user={user} />} />
        <Route path="/favorites" element={<Favorites user={user}/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/signup" element={<Signup setUser={setUser}/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
