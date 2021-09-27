import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Jumbotron from 'react-bootstrap/Jumbotron';
import "./BestBooks.css";
import axios from "axios";
import BookList from "./BookList";
import Row from 'react-bootstrap/Row'
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      addedArray:[]
    };
  }

  componentDidMount = () => {
    console.log("hello");
    axios
      .get("https://ramizregattest.herokuapp.com/flowers")
      .then((result) => {
        this.setState({
          dataArray: result.data,
        });
        console.log(this.state.dataArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addFlowerFunction=(item)=>{
    const {user}=this.props.auth0
    const email=user.email
    console.log(user.email);
    const obj={
      instructions:item.instructions,
      photo:item.photo,
      name:item.name,
      email:email,
    }

    axios
    .post("https://ramizregattest.herokuapp.com/addflower",obj)
    .then(result=>{
      this.setState({
        addedArray:result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render() {
    return (
      <>
        <h1>collection of flowers </h1>

        <Row xs={1} md={3} className="g-4">
          {this.state.dataArray.map((item) => {
            return <BookList item={item} addFlowerFunction={this.addFlowerFunction} />;
          })}
        </Row>
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
