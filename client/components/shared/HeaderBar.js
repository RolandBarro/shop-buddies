import React from 'react';
import {
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between">
          <div className="py-3">Shopping Buddies</div>
          <div className="py-3">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}