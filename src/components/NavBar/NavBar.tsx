import * as React from 'react';
import { Link } from 'react-router-dom';
import { withAppContext, AppContext } from 'AppContext/appContext';

interface Props {
  appContext: AppContext;
}

class NavBarComp extends React.Component<Props> {
  render() {
    const { appContext } = this.props;

    return (
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {appContext.loggedInUser && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
      </ul>
    );
  }
}

export const NavBar = withAppContext(NavBarComp);
