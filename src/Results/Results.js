import React from 'react';
import { Link } from 'react-router-dom'

const Results = ({ pokeResult, filteredResults }) => {
const resultsToDisplay = filteredResults.length === 0 ? pokeResult : filteredResults
return (
		<div>
			<h1 className="pokedex">Pokedex</h1>
            { resultsToDisplay.map((pokemon) => {
                console.log(pokemon)
                return <Link className="results"to={`/details/${pokemon.name}`} style={{textDecoration: 'none'}} key={pokemon.name}>
<h2 key={pokemon.name}>{pokemon.name}</h2>
                </Link>
})}
                
		</div>
	);
};
export default Results;
