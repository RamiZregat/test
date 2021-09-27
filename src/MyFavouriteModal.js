import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class MyFavouriteModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleclose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Flower</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.props.updateFlowerFunction}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" defaultValue={this.props.name} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Instructions</Form.Label>
              <Form.Control type="text" name="instructions" defaultValue={this.props.instructions} />
            </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleclose}>
              Close
            </Button>
            <Button variant="primary" type='submit'>
              Update
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default MyFavouriteModal;
