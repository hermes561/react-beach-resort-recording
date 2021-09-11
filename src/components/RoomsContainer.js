import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from  './Loading';
import {withRoomConsumer} from '../context';

function RoomsContainer({context}) {
	const {loading, sortedRooms} = context;
	if(loading) {
		return <Loading />; 
	}
	return (
		<>
			<RoomFilter  />
			<RoomList rooms={sortedRooms} />
		</>
	)
}

export default withRoomConsumer(RoomsContainer)


// import {RoomConsumer} from '../context';
// import Loading from  './Loading';

// export default function RoomsContainer() {
// 	return (
// 		<RoomConsumer>
// 			{
// 				(value) => {
// 					//console.log(value);
// 					const {loading, sortedRooms,rooms} = value;

// 					// if(loading) {
// 					// 	return <Loading />; 
// 					// }
// 					return (
// 						<div>
// 							hello from roomns container
// 							<RoomFilter rooms={rooms} />
//                             {loading?<Loading />:<RoomList rooms={sortedRooms} />}
// 						</div>
// 					)
// 				}
// 			}
// 		</RoomConsumer>
// 	)
// }