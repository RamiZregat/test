import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class BookList extends Component {
  render() {
    return (
      <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.item.photo} />
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>
            {this.props.item.instructions}
            </Card.Text>
            <Button onClick={()=>{this.props.addFlowerFunction(this.props.item)}} variant="primary">Add to favourite</Button>
          </Card.Body>
        </Card>
        </Col>
      </>
    );
  }
}

export default BookList;
