import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import BestBooks from './BestBooks.js';
import MyFavourite from './MyFavourite'

class App extends React.Component {

  render() {
    console.log('app', this.props);
    const {isAuthenticated}=this.props.auth0;
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
               {isAuthenticated && <BestBooks/>}
               {!isAuthenticated && <Login/>}
              </Route>
              <Route exact path="/MyFavourite">
               {isAuthenticated && <MyFavourite/>}
              </Route>
              {}
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
