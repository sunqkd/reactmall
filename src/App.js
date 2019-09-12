import React from 'react';
import './App.css';
import './css/index.css';
import './css/pcontent.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Pcontent from './components/Pcontent';
import Login from './components/Login';

function App() {
	return (
		<div className="App">
			<Router>

				<Route exact path="/" component={Home} />
				{/* 动态路由 */}
				<Route path="/pcontent/:id" component={Pcontent} />
				{/* 登录 */}
				<Route path="/login" component={Login} />
				
			</Router>
		</div>
	);
}

export default App;
