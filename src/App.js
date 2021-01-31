import React, { Component, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { CSSTransition } from 'react-transition-group';

import routes from './routes';
import { getCurrentUser } from './redux/auth/auth-operations';

import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import AppBar from './Components/AppBar';
import Container from './Components/Container';

import HomePage from './views/HomePage';
import Contacts from './views/Contacts';
import LoginPage from './views/LoginPage';
import Register from './views/Register';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<p>Загружаем...</p>}>
            <Switch>
              <PublicRoute exact path={routes.home} component={HomePage} />
              <PrivateRoute
                path={routes.contacts}
                component={Contacts}
                redirectTo={routes.login}
              />
              <PublicRoute
                path={routes.login}
                restricted
                component={LoginPage}
                redirectTo={routes.contacts}
              />
              <PublicRoute
                path={routes.register}
                restricted
                component={Register}
                redirectTo={routes.contacts}
              />
              <Redirect to={routes.home} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
