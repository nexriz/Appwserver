import React from 'react';

export default class LoginForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    submitForm: React.PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
    	username: '',
    	password: ''
    }
  }
  handleInputChange(e) {
  	const { target } = e;
  	const name = target.name;
  	this.setState({[name]: target.value})
  }
  render() {
  	const { submitForm } = this.props;
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
      			<label>Password:</label>
      		</li>
      		<li>
      			<input type="password" name="password" onChange={(e)=>this.handleInputChange(e)}/><br/>
      		</li>
      		<button>Submit</button>
      	</ul>
      	</form>
      </div>
    );
  }
}
