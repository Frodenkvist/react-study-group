import * as React from 'react';
import { AppContext, withAppContext } from 'AppContext/appContext';

interface Props {
  appContext: AppContext;
}

class ProfilePageComp extends React.Component<Props> {
  render() {
    const { appContext } = this.props;

    if (appContext.loggedInUser === null) {
      return null;
    }

    return (
      <>
        <div>
          <label>{`First Name: ${appContext.loggedInUser.firstName}`}</label>
        </div>
        <div>
          <label>{`Last Name: ${appContext.loggedInUser.lastName}`}</label>
        </div>
      </>
    );
  }
}

export const ProfilePage = withAppContext(ProfilePageComp);
