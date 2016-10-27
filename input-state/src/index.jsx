import React from "react";
import ReactDOM from "react-dom";

var Component=React.createClass({
	getInitialState:function(){
		return {
			disable:false
		}
	},
	handleClick:function(){
		this.setState({
			disable:!this.state.disable
		})
		console.log('changed');
	},
	render:function(){
		return (
			<p><input type="text" disabled={this.state.disable} /><input type="button" onClick={this.handleClick} value="Change State" /></p>
		)
	}
})
ReactDOM.render(
	<Component/>,
	document.getElementById("root")
)