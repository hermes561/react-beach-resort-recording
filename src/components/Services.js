import React, {Component} from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
	state = {
		services:[
			{
				icon: <FaCocktail/>,
				title: "free cocktails",
				info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			},
			{
				icon: <FaHiking/>,
				title: "Endleess hiking",
				info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			},
			{
				icon: <FaShuttleVan/>,
				title: "free shuttle",
				info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			},
			{
				icon: <FaBeer/>,
				title: "strongest beer",
				info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			},
		]
	}
	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.services.map((service, index)=>{
						return <article key={index} className="service">
							<span>{service.icon}</span>
							<h6>{service.title}</h6>
							<p>{service.info}</p>
						</article>
					})}
				</div>
			</section>
		)
	}
}