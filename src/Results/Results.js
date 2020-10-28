import React, { useEffect } from 'react';


const Results = () => {
    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(url)
          .then(res => res.json())
          .then(console.log)
          .catch(console.error)
    }, [])
    return (
			<div>
				Results
			</div>
		);
};

export default Results;
