import * as React from 'react';
import { withAppContext, AppContext } from 'AppContext/appContext';

interface Props {
  appContext: AppContext;
}

interface State {
  username: string;
  password: string;
}

class LoginPageComp extends React.Component<Props, State> {
  usernameInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.usernameInputRef = React.createRef();

    this.state = {
      username: '',
      password: ''
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);
  }

  componentDidMount() {
    if (this.usernameInputRef.current) {
      this.usernameInputRef.current.focus();
    }
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={this.onChangeUsername}
            ref={this.usernameInputRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={this.onChangePassword}
          />
        </div>
        <button onClick={this.onClickLogin}>Login</button>
      </div>
    );
  }

  onChangeUsername(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      username: event.currentTarget.value
    });
  }

  onChangePassword(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      password: event.currentTarget.value
    });
  }

  onClickLogin() {
    const { appContext } = this.props;
    const { username, password } = this.state;

    if (username === 'nisse' && password === '123') {
      appContext.setLoggedInUser({
        firstName: 'nisse',
        lastName: 'hult'
      });
    }
  }
}

export const LoginPage = withAppContext(LoginPageComp);
