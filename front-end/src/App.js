import Home from './views/Home';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flights from './views/Flights';
import Login from './views/Login';
import Register from './views/Register';
import Flight from './views/Flight';
import Attractions from './views/Attractions';
import Restaurants from './views/Restaurants';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact={true} element={<Home />} />
				<Route path="/flights" exact={true} element={<Flights />} />
				<Route path="/flights/:id" exact={true} element={<Flight />} />
				<Route
					path="/attractions"
					exact={true}
					element={<Attractions />}
				/>
				<Route
					path="/restaurants"
					exact={true}
					element={<Restaurants />}
				/>
				<Route path="/login" exact={true} element={<Login />} />
				<Route path="/register" exact={true} element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
