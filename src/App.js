import React from 'react';
// import './App.css';
// import './css/index.css';
// import './css/pcontent.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Pcontent from './components/Pcontent';
import Login from './components/Login';

import User from './components/User';
import Center from './components/Center';


function App() {
	return (
		<div className="App">
			<Router>
				
				{/* <Route exact path="/" component={Home} /> */}
				{/* 动态路由 */}
				{/* <Route path="/pcontent/:id" component={Pcontent} /> */}
				{/* 登录 */}
				{/* <Route path="/login" component={Login} /> */}

				<header>
					<Link to="/">主页</Link>
					<Link to="/user">用户</Link>
				</header>

				<Route path="/" exact component={Center}></Route>
				<Route path="/user"  component={User}></Route>
			
				
			</Router>
		</div>
	);
}

export default App;
