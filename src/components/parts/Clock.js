import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	date: new Date()
    }
  }

  componentWillMount() {
    this.timer = setInterval(() => this.setState({date: new Date()}), 1000 );
  }
  componentWillUmmount() {

  	clearInterval(this.timer);
    this.timer = false;
  }
  render() {
  	const { date } = this.state;
    return (
      <div>
      	{date.toLocaleTimeString('en-GB')}
      </div>
    );
  }
}
