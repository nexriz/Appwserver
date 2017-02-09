import React, { Component } from 'react';

import LoginForm from './components/modules/LoginForm';
import RegisterForm from './components/modules/RegisterForm';
import Clock from './components/modules/Clock';

class App extends Component {

  submitForm(e, { username, password }) {
    e.preventDefault();
    console.log(username, password)
  }
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <RegisterForm submitForm={this.submitForm.bind(this)}/>
        <Clock />
        <LoginForm submitForm={this.submitForm.bind(this)} />
      </div>
    );
  }
}

export default App;
