import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ContactTableRow from "./ContactTableRow";

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/contacts/")
      .then(response => {
        this.setState({
          contacts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.contacts.map((response, id) => {
      return <StudentTableRow obj={response} key={id} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
