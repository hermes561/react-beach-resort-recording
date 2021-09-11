import React, {Component} from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbarn extends Component {
	state= {
		isOpen:false,
	}
	handleToggle = () => {
		this.setState({isOpen:!this.state.isOpen});
	}

	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header"> 
						<Link to="/">
							<img src={logo} alt="Beach Resorts" />
						</Link>	
						<button type="button" className="nav-btn" onClick={this.handleToggle}>
							<FaAlignRight className="nav-icon"  />
						</button>
					</div>
					<ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
						<li className="nav-link">
							<Link to="/">Home</Link>
						</li>
						<li className="nav-link">
							<Link to="/rooms">Rooms</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}