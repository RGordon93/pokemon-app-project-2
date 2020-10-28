import React from 'react';
import { Link } from 'react-router-dom';
import Results from '../Results/Results'

const Search = () => {
const handleSubmit = (event) => {
	event.preventDefault()
}
	return (
		<div>
			Search
		<form onSubmit={handleSubmit}>
			<label htmlFor='searchBar'>
			   <input id='searchBar' />
			   <button type='submit'>Submit</button>
    
			</label>
		</form>
		</div>
	);
};

export default Search;