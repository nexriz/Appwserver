import React from 'react';

import axios from 'axios'

import LoginForm from './parts/LoginForm'


let getAuth = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
})

export default class LoginPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  Login(e, data) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
      	<LoginForm />
      </div>
    );
  }
}
