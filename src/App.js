import "./App.css";
import UserData from "./components/UserData";
import Heading from "./components/Heading";

function App() {
	return (
		<div>
			<Heading />
			<div className="app-container">
				<UserData />
				<UserData />
				<UserData />
				<UserData />
				<UserData />
				<UserData />
			</div>
		</div>
	);
}

export default App;
