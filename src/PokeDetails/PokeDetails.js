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
			<h2>{pokeDetail?.name}</h2>
			<img src={pokeDetail?.sprites.front_default} />
			<h3>type: {pokeDetail?.types[0].type.name} </h3>
			<h3>abilities: {pokeDetail?.abilities[0].ability.name},&nbsp;{pokeDetail?.abilities[1].ability.name}</h3>
			<h3>
				{pokeDetail?.name} can learn: <br></br>
				{pokeDetail?.moves[0].move.name} <br></br>
				{/* {pokeDetail?.moves[1].move.name} <br></br>
					{pokeDetail?.moves[2].move.name} <br></br>
					{pokeDetail?.moves[3].move.name} <br></br>
					{pokeDetail?.moves[4].move.name} <br></br>
					{pokeDetail?.moves[5].move.name} <br></br>
					{pokeDetail?.moves[6].move.name} <br></br>
					{pokeDetail?.moves[7].move.name} <br></br>
					{pokeDetail?.moves[8].move.name} <br></br>
					{pokeDetail?.moves[9].move.name} <br></br>
					{pokeDetail?.moves[11].move.name} <br></br>
					{pokeDetail?.moves[12].move.name} <br></br>
					{pokeDetail?.moves[13].move.name} <br></br>
					{pokeDetail?.moves[14].move.name} <br></br>
					{pokeDetail?.moves[15].move.name} <br></br>
					{pokeDetail?.moves[16].move.name} <br></br>
					{pokeDetail?.moves[17].move.name} <br></br>
					{pokeDetail?.moves[18].move.name} <br></br>
					{pokeDetail?.moves[19].move.name} <br></br>
					{pokeDetail?.moves[20].move.name} <br></br>
					{pokeDetail?.moves[21].move.name} <br></br>
					{pokeDetail?.moves[22].move.name} <br></br>
					{pokeDetail?.moves[23].move.name} <br></br>
					{pokeDetail?.moves[24].move.name} <br></br>
					{pokeDetail?.moves[25].move.name} <br></br>
					{pokeDetail?.moves[26].move.name} <br></br>
					{pokeDetail?.moves[27].move.name} <br></br>
					{pokeDetail?.moves[28].move.name} <br></br>
					{pokeDetail?.moves[29].move.name} <br></br>
					{pokeDetail?.moves[30].move.name} <br></br>
					{pokeDetail?.moves[31].move.name} <br></br>
					{pokeDetail?.moves[32].move.name} <br></br>
					{pokeDetail?.moves[33].move.name} <br></br>
					{pokeDetail?.moves[34].move.name} <br></br>
					{pokeDetail?.moves[35].move.name} <br></br>
					{pokeDetail?.moves[36].move.name} <br></br>
					{pokeDetail?.moves[37].move.name} <br></br>
					{pokeDetail?.moves[38].move.name} <br></br>
					{pokeDetail?.moves[39].move.name} <br></br>
					{pokeDetail?.moves[40].move.name} <br></br>
					{pokeDetail?.moves[41].move.name} <br></br>
					{pokeDetail?.moves[42].move.name} <br></br>
					{pokeDetail?.moves[43].move.name} <br></br>
					{pokeDetail?.moves[44].move.name} <br></br>
					{pokeDetail?.moves[45].move.name} <br></br>
					{pokeDetail?.moves[46].move.name} <br></br>
					{pokeDetail?.moves[47].move.name} <br></br>
					{pokeDetail?.moves[48].move.name} <br></br>
					{pokeDetail?.moves[49].move.name} <br></br>
					{pokeDetail?.moves[50].move.name} <br></br> */}
			</h3>
		</div>
	);
};

export default PokeDetails;
