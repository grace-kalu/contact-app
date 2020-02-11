import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CreateContact extends Component {
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

  onSubmit(event) {
    event.preventDefault();

    console.log(`Student successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Email: ${this.state.phoneNumber}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Roll no: ${this.state.address}`);

    this.setState({ name: "", phoneNumber: "", email: "", address: "" });
  }

  render() {
    return (
      <div class="form-wrapper">
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

          <Button variant="primary" size="lg" block="block" type="submit">
            Create Contact
          </Button>
        </Form>
      </div>
    );
  }
}
export default CreateContact;
