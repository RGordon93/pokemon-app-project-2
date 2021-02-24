import React from 'react';
import NukaCarousel from '../NukaCarousel/NukaCarousel'

const Home = () => {
	return (
		<div>
			<h2 className='title'>Let's Go Poke Moves!</h2>
			<NukaCarousel />
			{/* <p className='homepage'>
				Welcome to <strong>'Let's Go Poke Moves!'</strong>
				<br></br>
				Explore all of the moves any pokemon can learn from Generation I through
				Generation VIII {} <br></br>
				<p>
					Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola & Galar (Coming Soon)
				</p>
				<br></br>
				Become a <i>Pokemon Master</i>
				<br></br>
				<br></br>
			</p> */}
			{/* <button className='openModal'>About the Site</button>
				<div className='modal'>
					<div className='modal-textbox'>
						<a className='close' href='#'>
							Close
						</a>
						<h1> About Let's Go Poke Moves!</h1>
						<p>
							An app for pokemon  trainers to search for what moves
							their pokemon can learn. 
						</p>
						<p>Let's Go Poke Moves shows the name, ability and moves of each pokemon through a pokedex listing or filtered search</p>
						<p>⭐️Become the very best⭐️</p>
					</div>
				</div> */}
		</div>
	);
};

export default Home;
