import React, {Component} from 'react';
import Title from './Title';
import {RoomContext} from '../context';
import Loading from './Loading';
import Room from './Room';

export default class FeaturedRooms extends Component {
	static contextType = RoomContext;
	render() {
		const {loading, featuredRooms: rooms}= this.context;
		//console.log(rooms);
		const newRooms = rooms.map(room=>{
			return <Room key={room.id} room={room} />
		});
		

		return (
			<section className="featured-rooms">
				<Title title="Featured Rooms" />
				<div className="featured-rooms-center">
					{loading?<Loading />:newRooms}
				</div>
			</section>
		)
	}
}