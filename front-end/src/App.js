import Home from './views/Home';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flights from './views/Flights';
import Login from './views/Login';
import Register from './views/Register';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact={true} element={<Home />} />
				<Route path="/flights" exact={true} element={<Flights />} />
				<Route path="/attractions" exact={true} element={<Flights />} />
				<Route path="/restaurants" exact={true} element={<Flights />} />
				<Route path="/login" exact={true} element={<Login />} />
				<Route path="/register" exact={true} element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
