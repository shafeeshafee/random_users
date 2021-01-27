import React from "react";
import "./Heading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function Heading() {
	return (
		<div className="heading">
			<h1>
				<FontAwesomeIcon icon={faAddressCard} /> RandomHippo
			</h1>
			<h4>The best place to meet new AI personas</h4>
		</div>
	);
}
