import "./App.css";
import { Flag } from "./Flag";
function App() {
	return (
		<>
			<div className="scoreBoard">
				<div className="description"></div>
				<div className="ScoreTable"></div>
			</div>
			<div className="flagList">
				<Flag country="TN" />
				<Flag country="FR" />
				<Flag country="AT" />
				<Flag country="AG" />
				<Flag country="AL" />
				<Flag country="IT" />
				<Flag country="MA" />
				<Flag country="TR" />
				<Flag country="PS" />
				<Flag country="PT" />
				<Flag country="NG" />
				<Flag country="BH" />
			</div>
		</>
	);
}

export default App;
