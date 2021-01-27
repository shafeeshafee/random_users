import React, { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteData() {
	const [motto, setMotto] = useState([]);
	const getRandomQuote = async () => {
		const response = await axios.get("https://freequote.herokuapp.com/");
		setMotto(response.data);
	};

	useEffect(() => {
		getRandomQuote();
	}, []);

	return (
		<p>
			<span class="motto-p">
				"<em>{motto.quote}</em>"
			</span>
		</p>
	);
}
