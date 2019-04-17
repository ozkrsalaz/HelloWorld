import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import About from './views/About';
import Index from './views/Index';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about/">About</Link>
							</li>
							<li>
								<Link to="/users/">Users</Link>
							</li>
						</ul>
					</nav>

					<Route path="/" exact component={Index} />
					<Route path="/about/" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
