import React from 'react';
import { connect } from 'react-redux';


export default function(ComposedComponent) {
	class Authenticate extends React.Component {

      static contextTypes = {
        router: React.PropTypes.object,
      };
  	  componentWillMount() {
  	  	if(!this.props.isAuth) {
  	  		this.context.router.push('/')
  	  	}
  	  }
      componentWillUpdate(nextProps) {
        if(!nextProps.isAuth) {
          this.context.router.push('/app')
        }
      }
	    render() {
	      return <ComposedComponent {...this.props}/>
	    }
	}

    function mapStateToProps(state) {
    	return {
    		isAuth: state.auth.isAuth
    	}
    }
	return connect(mapStateToProps)(Authenticate)
}