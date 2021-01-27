import React, {useState, useEffect} from "react";
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


export default function User(props) {

	return (
		<div className="user-container">
			<h3>{props.name.first} {props.name.last}</h3>
			<img src={props.picture.large} alt="User Picture"/>
			<p>{props.gender}, {props.registered.age < 18 ? props.registered.age + 15 : props.registered.age} years old</p>
			<p> 
			<FontAwesomeIcon icon={faMapMarkerAlt} />&ensp;    
			{props.location.city}, {props.location.state}. {props.location.country}
			</p>
		</div>
	);
}
