import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

//get all uniqu values
const getUnique = (items,value) => {
	return [...new Set(items.map((item)=>item[value]))];
} 

export default function RoomFilter() {
	const context = useContext(RoomContext);
	const { handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets,rooms} = context;
	//console.log(context);

	let types = ['all',...getUnique(rooms,'type')];
    types = types.map((item,index)=>{
		return <option key={index} value={item}  >{item}</option>;
	});

	let capacities = getUnique(rooms,'capacity');
	//console.log(capacities);
	capacities  = capacities.map((item,index)=>{
		return <option key={index} value={item}  >{item}</option>;
	});

	return (
		<section className="filter-container">
			<Title title="search room" />
			<form className="filter-form">
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
						{types}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="capacity">guests</label>
					<select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
						{capacities}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="price">room price ${price}</label>
					<input type="range" name="price" min={minPrice} max={maxPrice} value={price} className="form-control" onChange={handleChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="size">room size</label>
					<div className="size-inputs">
						<input type="number" name="minSize" id="size" value={minSize} className="size-input" onChange={handleChange}/>
						<input type="number" name="maxSize" id="size" value={maxSize} className="size-input" onChange={handleChange}/>
					</div>
				</div>
				<div className="form-group">
					<div className="single-extra">
						<input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
						<label htmlFor="breakfast">breakfast</label> 
					</div>
					<div className="single-extra">
						<input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
						<label htmlFor="pets">pets</label> 
					</div>
				</div>
			</form>
		</section>
	)
}