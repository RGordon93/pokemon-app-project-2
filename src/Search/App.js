import React from 'react';
import Pokemon from '../Home/Home';
// import { Route } from 'react-router-dom';
// import PokeMoves from './PokeMoves';

function App() {
	return (
		<>
			<header>
				<h1>
					<a href='/'>Home</a>
				</h1>
			</header>
			{/* <main>
				<Route path='/' exact component={Pokemon} />
				<Route
					path='/details/:id'
					render={(routerProps) => <PokeMoves match={routerProps.match} />}
				/>

			</main> */}
		</>
	);
}
export default App;
