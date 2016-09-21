import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { ChangePasswordPage, MasterPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage, MapPage} from './pages';

ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
        <LoginRoute path='/login' component={LoginPage} />
        <Route path='/verify' component={VerifyEmailPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/change' component={ChangePasswordPage} />
        <Route path='/forgot' component={ResetPasswordPage} />
        <Route path='/map' component={MapPage} />
        <AuthenticatedRoute>
          <Route path='/profile' component={ProfilePage} />
        </AuthenticatedRoute>
      </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);