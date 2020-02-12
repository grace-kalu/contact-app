import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditContact extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      address: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/contacts/edit-contact/" +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          name: res.data.name,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
          address: res.data.address
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangeName(name) {
    this.setState({ name: name.target.value });
  }

  onChangePhoneNo(number) {
    this.setState({ phoneNumber: number.target.value });
  }

  onChangeEmail(email) {
    this.setState({ email: email.target.value });
  }

  onChangeAddress(address) {
    this.setState({ address: address.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const contactObject = {
        name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      address: this.state.address
    };

    axios
      .put(
        "http://localhost:4000/students/update-contact/" +
          this.props.match.params.id,
        contactObject
      )
      .then(res => {
        console.log(res.data);
        console.log("Contact successfully updated");
      })
      .catch(error => {
        console.log(error);
      });

    // Redirect to Contact List
    this.props.history.push("/contact-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </Form.Group>

          <Form.Group controlId="PhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              value={this.state.phoneNumber}
              onChange={this.onChangePhoneNo}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </Form.Group>

          <Button variant="success" size="lg" block="block" type="submit">
            Update Contact
          </Button>
        </Form>
      </div>
    );
  }
}
