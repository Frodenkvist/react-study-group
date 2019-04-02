import * as React from 'react';
import * as styles from './App.scss';

import { HashRouter, Route } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import { AppContextProvider, AppContext } from 'AppContext/appContext';
import { Async } from 'components/Async/Async';

const LoginPage = (props: any) => (
  <Async
    load={import('containers/LoginPage/LoginPage')}
    componentProps={props}
  />
);

const ProfilePage = (props: any) => (
  <Async
    load={import('containers/ProfilePage/ProfilePage')}
    componentProps={props}
  />
);

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
        <AppContextProvider value={appContext}>
          <NavBar />
          <div className={styles.container}>
            <Route exact={true} path="/" />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
          </div>
        </AppContextProvider>
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
