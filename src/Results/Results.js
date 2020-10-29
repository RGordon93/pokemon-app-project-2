import React, { useState, useEffect } from 'react';

const Results = () => {
	const [pokeResult, setPokeResult] = useState([]);
	useEffect(() => {
		const url = 'https://pokeapi.co/api/v2/pokemon/';
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				console.log(resJson);
				setPokeResult(resJson.results);
			})
			.catch(console.error);
		//  return () => {
		// 	 cleanup
		//  }
	}, []);
	return (
		<div>
			Results
			{pokeResult.map((pokemon) => (
				<h2 key={pokemon.id}>{pokemon.name}</h2>
			))}
		</div>
	);
};
export default Results;
