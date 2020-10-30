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
    console.log(pokeDetail)

    return (
        <div>
       <h2>{pokeDetail?.name}</h2>
       <img src={pokeDetail?.sprites.front_default}/>
        </div>
    );
};

export default PokeDetails;