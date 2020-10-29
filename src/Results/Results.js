import React, { useState, useEffect } from 'react';


const Results = ({ pokeResult, filteredResults }) => {
const resultsToDisplay = filteredResults.length === 0 ? pokeResult : filteredResults
return (
		<div>
			Results
            { resultsToDisplay.map((pokemon) => (
				<h2 key={pokemon.id}>{pokemon.name}</h2>
			))}
		</div>
	);
};
export default Results;
