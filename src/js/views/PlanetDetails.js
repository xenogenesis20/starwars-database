import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../styles/demo.scss";

export const PlanetDetails = () => {
	const location = useLocation();
	// const { person } = location.state.props.person;
	// console.log(person);
	// console.log(location.state.props.planet.name);
	// console.log(location.state.props);

	return (
		<div className="container ">
			<h1>{location.state.props.planet.name}</h1>
			<div>
				<img
					className="detailImg"
					src="https://i.pinimg.com/originals/8a/a9/2c/8aa92c5ba570f0c8d50a97e6bce0a8ea.jpg"
				/>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
					classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
					professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
					literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
					of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular
				</p>
			</div>

			<ul className="list-group list-group-horizontal">
				<li className="list-group-item flex-fill">Orbital Period</li>
				<li className="list-group-item flex-fill">Diameter</li>
				<li className="list-group-item flex-fill">Climate</li>
				<li className="list-group-item flex-fill">Gravity</li>
				<li className="list-group-item flex-fill">Terrain</li>
				<li className="list-group-item flex-fill">Population</li>
			</ul>
			<ul className="list-group list-group-horizontal">
				<li className="list-group-item flex-fill ">{location.state.props.planet.orbital_period}</li>
				<li className="list-group-item flex-fill">{location.state.props.planet.diameter}</li>
				<li className="list-group-item flex-fill">{location.state.props.planet.climate}</li>
				<li className="list-group-item flex-fill">{location.state.props.planet.gravity}</li>
				<li className="list-group-item flex-fill">{location.state.props.planet.terrain}</li>
				<li className="list-group-item flex-fill">{location.state.props.planet.population}</li>
			</ul>

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
