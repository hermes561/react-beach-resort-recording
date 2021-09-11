import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Baner from '../components/Baner';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
	return (
		<>
			<Hero hero="roomsHero">
				<Baner title="our rooms">
					<Link to="/" className="btn-primary">return home</Link>
				</Baner>
			</Hero>
			<RoomsContainer />
		</>
	)
}

export default Rooms