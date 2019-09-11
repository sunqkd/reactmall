import React from 'react';
import './App.css';
import './css/index.css';
import './css/pcontent.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Pcontent from './components/Pcontent';
function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={Home} />
				{/* 动态路由 */}
				<Route path="/pcontent/:id" component={Pcontent} />
			</Router>
		</div>
	);
}

export default App;
