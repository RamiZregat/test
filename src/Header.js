import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton';

class Header extends React.Component {
  render() {
    const {isAuthenticated}=this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/MyFavourite">My Favourite</Link>
        {isAuthenticated && <LogoutButton/>}
        {!isAuthenticated && <LoginButton/>}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
