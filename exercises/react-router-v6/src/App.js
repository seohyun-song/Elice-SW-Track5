import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
	return (
		<>
			<div className="navbar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/list">List</Link>
					</li>
					<li>
						<Link to="/detail">Detail</Link>
					</li>
				</ul>
			</div>
			<div className="box-container">
				<Outlet></Outlet>
			</div>
		</>
	);
}

export default App;
