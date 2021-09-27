import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class MyFavourite extends Component {
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
            <Button onClick={()=>{this.props.showModal(this.props.item)}} variant="primary">update</Button>
            <Button onClick={()=>{this.props.deleteflower(this.props.item)}} variant="primary">delete</Button>
          </Card.Body>
        </Card>
        </Col>
      </>
    );
  }
}

export default MyFavourite;
