import React from 'react';
import axios from 'axios'

let registerUser = (token) => axios.create({
  baseURL: 'http://localhost:8080/api/user',
  timeout: 10000,
  headers: {
    Authorization: 'Bearer ' + token
  },
})

export default class RegisterForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    submitForm: React.PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
    	username: '',
    	email: '',
    	password: '',
    	passwordtwo: '',
    	passlength: null
    }
  }
  handleInputChange(e) {
  	const { target } = e,
  		  { length } = this.refs,
  		  name       = target.name;
  	this.setState({
  		[name]: target.value,
  		passlength: length.value.length !== 0 ? length.value.length : null
  	})
  }
  render() {
  	const { submitForm } = this.props;
  	const { passlength } = this.state;
  	const length = passlength > 6 ? 'Medium Length' : 'Too Short';
    return (
      <div>
      	<form onSubmit={(e) => submitForm(e, this.state)}>
      	<ul style={{ listStyleType: 'none'}}>
      		<li>	
      			<label>Username:</label>
      		</li>
      		<li>
      			<input type="text" name="username" onChange={(e)=>this.handleInputChange(e)}/>
      		</li>
       		<li>	
      			<label>Email:</label>
      		</li>
      		<li>
      			<input type="text" name="email" onChange={(e)=>this.handleInputChange(e)}/>
      		</li>
      		<li>
      			<label>Password:</label> {passlength && length}
      		</li>
      		<li>
      			<input type="password" ref="length" name="password" onChange={(e)=>this.handleInputChange(e)}/><br/>
      		</li>
      		<li>
      			<label>Repeat Password:</label>
      		</li>
      		<li>
      			<input type="password" name="passwordtwo" onChange={(e)=>this.handleInputChange(e)}/><br/>
      		</li>
      		<button>Submit</button>
      	</ul>
      	</form>
      </div>
    );
  }
}


