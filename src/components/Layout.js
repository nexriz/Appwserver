import React from 'react';
import Clock from './parts/Clock'


export default class LayoutPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
      	<h1>This is a layout</h1> <time><Clock/></time>
      	<hr/>
        
      	{this.props.children}
      </div>
    );
  }
}
