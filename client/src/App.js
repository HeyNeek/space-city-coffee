import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Shops from './Components/Shops';
import Favorites from './Components/Favorites';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo-removebg-preview.png';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand id="navbarLogo" as={Link} to="/"><img id="logo" src={logo}/>Space City Coffee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/shops">Shops</Nav.Link>
              <Nav.Link as={NavLink} to="/favorites">Favorites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shops" element={<Shops/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
