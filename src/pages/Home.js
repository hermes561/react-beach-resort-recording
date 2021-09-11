import React from 'react';
import Hero from '../components/Hero';
import Baner from '../components/Baner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
	return (
		<>
			<Hero>
				<Baner title="Luxurios rooms" subtitle="delux rooms starting at $299">
					<Link to="/rooms" className="btn-primary">our rooms</Link>
				</Baner>
			</Hero>
			
			<Services />
			<FeaturedRooms />
		</>
	)
}

export default Home