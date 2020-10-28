import React from 'react';
import './App.css'
import Home from './Home/Home';
import { Route, Redirect } from 'react-router-dom'; 
import Nav from './Nav/Nav'
import Search from './Search/Search';
import Results from './Results/Results'


function App() {
	return (
		<div className='App'>
			<Nav />
			<main>
				<Route path='/Home' component={Home} />
				<Route path='/Search' component={Search} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
			</main>
		</div>
	);
}
export default App;
