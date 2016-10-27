import React from 'react';
import { browserHistory } from 'react-router';

export default class About extends React.Component{
	handleSubmit(e){
		e.preventDefault();
	    const userName = e.target.elements[0].value;
	    const repo = e.target.elements[1].value;
	    const path = '/about/'+ userName +'/'+ repo;
	    browserHistory.push(path);
	}
	render(){
		return (
			<div>
				<p>about</p>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="userName" />
					<input type="text" placeholder="repo" />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}