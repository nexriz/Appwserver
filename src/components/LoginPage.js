import React from 'react';
import { connect } from 'react-redux'
import { login } from './redux/actions/authActions'
import LoginForm from './parts/LoginForm'
import { Link } from 'react-router';


function mapStateToProps({ auth }) {
  return {
    auth,
  }
}

export class LoginPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    isAuth: React.PropTypes.func,
    user: React.PropTypes.object,
    login: React.PropTypes.func
  };

  onSubmit(e, data) {
    e.preventDefault()
    this.props.login(data).then()
  }

  render() {
    const { isAuth, user } = this.props.auth
    const loggedIn = (
      <p>Welcome {user.name}</p>

      )
    return (
      <div className="jumbotron">
        { isAuth && loggedIn }
        { isAuth && <Link to="/app">App</Link> }
      	{ !isAuth && <LoginForm submitForm={this.onSubmit.bind(this)} />}
      </div>
    );
  }
}

export default connect(mapStateToProps, { login })(LoginPage)

