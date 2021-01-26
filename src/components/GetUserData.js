import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";

export default function GetUserData() {
	const [userData, setUserData] = useState([]);
	const [showMore, setShowMore] = useState(false);

	const getData = async () => {
		const response = await axios.get("https://api.randomuser.me");
		setUserData(response.data.results);
	};

	useEffect(() => {
		getData();
	}, []);

	console.log(userData);

	return (
		<div>
			{userData.map((user, index) => {
				return <User {...user} key={index} />;
			})}
			<button onClick={() => setShowMore(!showMore)}>See Contact Info</button>
			{showMore ? (
				<div>
					<h3>Contact Info:</h3>
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
