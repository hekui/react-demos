import React from 'react';

export default class show extends React.Component{
	render(){
		return (
			<div>
				your input:
				<p>name:{this.props.params.username}</p>
				<p>repos:{this.props.params.repos}</p>
			</div>
		)
	}
}