import React, { Component } from 'react';
import { Link } from 'react-router';
import LoginForm from './components/parts/LoginForm';
import RegisterForm from './components/parts/RegisterForm';






class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        token: ''
      }
    }

  }

  componentWillMount() {
  }
  submitForm(e, { username, password }) {
    e.preventDefault();
    console.log(username, password)

  }
  render() {
    return (
      <div >
        <div >
          <h2>Welcome to the App</h2>
        </div>
        <p>
        </p>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default App;
