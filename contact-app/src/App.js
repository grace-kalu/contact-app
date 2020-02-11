import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateContact from "./components/create-contact.component";
import EditContact from "./components/edit-contact.component";
import ContactList from "./components/contact-list.component";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-contact"} className="nav-link">
                  My Contact App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-contact"} className="nav-link">
                    Create Contact
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/contact-list"} className="nav-link">
                    Contact List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateContact} />
                  <Route path="/create-contact" component={CreateContact} />
                  <Route path="/edit-contact/:id" component={EditContact} />
                  <Route path="/contact-list" component={ContactList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
