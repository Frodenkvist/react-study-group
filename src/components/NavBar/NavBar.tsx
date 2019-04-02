import * as React from 'react';
import * as styles from './NavBar.scss';

import { Link } from 'react-router-dom';
import { withAppContext, AppContext } from 'AppContext/appContext';

interface Props {
  appContext: AppContext;
}

class NavBarComp extends React.Component<Props> {
  render() {
    const { appContext } = this.props;

    return (
      <ul className={styles.container}>
        <li>
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </li>
        {appContext.loggedInUser && (
          <li>
            <Link className={styles.link} to="/profile">
              Profile
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export const NavBar = withAppContext(NavBarComp);
