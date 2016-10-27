import React from 'react';
import { Link,IndexLink } from 'react-router';
import style from './App.css';

export default React.createClass({
	render(){
		return (
			<div className={style.app}>
				<h1 className={style.title}>My App</h1>
				<ul>
					<li><IndexLink to="/" activeClassName="active">home</IndexLink></li>
				 	<li><Link to="/about" activeClassName="active">about</Link></li>
				 	<li><Link to="/repos" activeClassName="active">repos</Link></li>
				</ul>
				{ this.props.children }
			</div>
		)
	}
})