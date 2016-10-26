import React from 'react';
import { render } from 'react-dom';

class Component extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			disable : false
		}
	}

    handleClick(){
    	this.setState({
    		disable : !this.state.disable
    	})
        console.log('changed');
    }

    render() {
    	let enable = this.state.disable;
    	
        return (
            <p><input type="text" disabled={enable} /><input type="button" onClick={this.handleClick} value="Change State" /></p>
        );
    }
}
render(
	<Component/>,
	document.getElementById("root")
)