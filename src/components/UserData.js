import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";
import "./UserData.css";

export default function UserData() {
	const [userData, setUserData] = useState([]);
	const [motto, setMotto] = useState([]);
	const [showMore, setShowMore] = useState(false);

	const getRandomUserData = async () => {
		const response = await axios.get("https://api.randomuser.me");
		setUserData(response.data.results);
	};

	const getRandomQuote = async () => {
		const response = await axios.get("https://freequote.herokuapp.com/");
		setMotto(response.data);
	};

	useEffect(() => {
		getRandomUserData();
	}, []);

	useEffect(() => {
		getRandomQuote();
	}, [userData]);

	return (
		<div className="card">
			<button className="generate-user" onClick={getRandomUserData}>
				Generate a User
			</button>
			{userData.map((user, index) => {
				return (
					<div>
						<User {...user} key={index} />
						<p>
							<span class="motto-p">
								"<em>{motto.quote}</em>"
							</span>
						</p>
					</div>
				);
			})}
			<button className="contact-btn" onClick={() => setShowMore(!showMore)}>
				See Contact Info
			</button>
			{showMore ? (
				<div>
					<p>{userData[0].email}</p>
					<p>
						<strong>Phone:</strong> {userData[0].phone}
					</p>
					<p>
						<strong>Cell:</strong> {userData[0].cell}
					</p>
				</div>
			) : (
				""
			)}
		</div>
	);
}
