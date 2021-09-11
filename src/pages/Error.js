import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Baner from '../components/Baner'

const Error = () => {
	return (
		<Hero>
			<Baner title="404" subtitle="page not found">
				<Link to="/" className="btn-primary">return home</Link>
			</Baner>
		</Hero>
	)
}

export default Error