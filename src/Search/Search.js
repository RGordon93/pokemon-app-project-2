import React, { useState, useEffect } from 'react';
import Results from '../Results/Results'

const Search = () => {
	
	const [filteredResults, setFilteredResults] = useState([]);
	const [pokeResult, setPokeResult] = useState([]);

	const url = 'https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0/';
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				console.log(resJson);
				setPokeResult(resJson.results);
			})
			.catch(console.error);
	}, []);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target[0].value)
	};
	const handleChange = (event) => {
		const filteredArray = pokeResult.filter(result => {
			return result.name.includes(event.target.value.toLowerCase())
		})
		setFilteredResults(filteredArray);
	};
	return (
		<div>
			<h3>Search by Keywords</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchBar'>
					<input
						id='searchBar'
						onChange={handleChange}
					/>
	     
        <input type="submit" placeholder="Pokemon Name" value="Search"/>
				</label>
			</form>
			<Results pokeResult={pokeResult} filteredResults={filteredResults}/>
		</div>
	);
};
export default Search;