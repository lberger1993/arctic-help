import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center">
          Welcome to Arctic Help 
          { this.context.user ? ' ' + this.context.user.givenName : null }!
        </h2>
        <hr />
        <div className="jumbotron">
          <p>
            <strong> Lets face it, Canada is cold!!! </strong>
          </p>
            <button type="button" class="btn btn-success"> 
                <Link to="/register" activeClassName="active"> Create Account</Link>
            </button>
            <button type="button" class="btn btn-success"> 
                <Link to="/login" activeClassName="active"> Login </Link>
            </button>
      </div>
      </div>
    );
  }
}
