import * as React from 'react';
// import * as styles from './App.scss';

import { HashRouter, Route } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import { LoginPage } from '../LoginPage/LoginPage';
import { AppContextProvoder, AppContext } from 'AppContext/appContext';
import { ProfilePage } from 'containers/ProfilePage/ProfilePage';

interface State {
  appContext: AppContext;
}

export class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.setLoggedInUser = this.setLoggedInUser.bind(this);

    this.state = {
      appContext: {
        loggedInUser: null,
        setLoggedInUser: this.setLoggedInUser
      }
    };
  }

  render() {
    const { appContext } = this.state;

    return (
      <HashRouter>
        <div>
          <AppContextProvoder value={appContext}>
            <NavBar />
            <Route exact={true} path="/" />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
          </AppContextProvoder>
        </div>
      </HashRouter>
    );
  }

  setLoggedInUser(user: User) {
    this.setState({
      appContext: {
        ...this.state.appContext,
        loggedInUser: user
      }
    });
  }
}
