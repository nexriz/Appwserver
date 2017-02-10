import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Clock from './parts/Clock'
import { logout } from './redux/actions/authActions'

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export class Layout extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    auth: React.PropTypes.object
  };
  static contextTypes = {
    router: React.PropTypes.object
  }
  logout(e) {
    console.log()
    e.preventDefault()
    this.props.logout();
    this.context.router.push('/')
  }
  render() {
    const { isAuth } = this.props.auth;
    const logoutLinks = (<a href="#" onClick={this.logout.bind(this)}>logout</a>)
    const loginLinks =  (<Link to="/">login</Link>)
    return (
      <div className="container">
        <h1>This is a layout</h1> <time><Clock/></time>
        {isAuth ? logoutLinks : loginLinks}
        <hr/>
        
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, { logout })(Layout)




