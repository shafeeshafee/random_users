import React from "react";

export default function UserDetails(props) {
	return (
		<div className="user-container">
			<h3>{props.name.first} {props.name.last}</h3>
			<img src={props.picture.large} alt="User Picture"/>
			<p>{props.gender}, {props.registered.age} years old</p>
			<p>{props.location.city}, {props.location.state}. {props.location.country}</p>
		</div>
	);
}
