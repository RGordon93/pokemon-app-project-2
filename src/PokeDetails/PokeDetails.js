import React, { useState, useEffect } from 'react';

const PokeDetails = ({ match }) => {
	const [pokeDetail, setPokeDetail] = useState(null);
	useEffect(() => {}, []);

	const url = `https://pokeapi.co/api/v2/pokemon/${match.params.pokemon}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				setPokeDetail(resJson);
			});
	}, [url]);
	console.log(pokeDetail);

	return (
		<div>
			<h2 className='pokeName'>"{pokeDetail?.name}"</h2>
			<img src={pokeDetail?.sprites.front_default} />
			<h3 className='pokeType'>type: {pokeDetail?.types[0].type.name} </h3>
			{/* <h3 className="pokeAbilities">abilities: {pokeDetail?.abilities[0].ability.name},&nbsp;{pokeDetail?.abilities[1].ability.name}</h3> */}
			{pokeDetail?.abilities.map((abilitiesobj) => {
				return <p className="pokeAbilities" key={abilitiesobj.ability.name}>{abilitiesobj.ability.name}</p>;
			})}
			<h3 className='pokeMoves'>
				{pokeDetail?.name} can learn: <br></br>
				{pokeDetail?.moves.map((moveobj) => {
					return <li key={moveobj.move.name}>{moveobj.move.name}</li>;
				})}
			</h3>
		</div>
	);
};

export default PokeDetails;
