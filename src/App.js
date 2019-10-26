import React from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/redux-store';
import { initializeApp } from './redux/appReducer';
import withSuspense from './hoc/withSuspense';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Spinner from './components/Spinner/Spinner';
import News from './components/News/News';
import Music from './components/Music/Music';
import Login from './components/Login/Login';

import './App.css';

const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer'),
);
const UsersContainer = React.lazy(() =>
  import('./components/Users/UsersContainer'),
);
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer'),
);

class App extends React.PureComponent {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Spinner />;

    return (
      <div className="app">
        <HeaderContainer />
        <Sidebar />
        <div className="content">
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(
    mapStateToProps,
    { initializeApp },
  ),
)(App);

const AppSN = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default AppSN;
