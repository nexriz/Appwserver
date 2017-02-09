import React, { Component } from 'react';

import LoginForm from './components/parts/LoginForm';
import RegisterForm from './components/parts/RegisterForm';
import Clock from './components/parts/Clock';



let registerUser = (token) => axios.create({
  baseURL: 'http://localhost:8080/api/user',
  timeout: 10000,
  headers: {
    Authorization: 'Bearer ' + token
  },
})

let getAuth = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
})

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
        getAuth.get('/auth').then(data => { 
          this.setState({ data: {token: data.data.token}})
        })
  }
  submitForm(e, { username, password }) {
    e.preventDefault();
    console.log(username, password)
    registerUser(this.state.data.token).post('/create').then(data => console.log(data))

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
