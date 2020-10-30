import React from 'react';

const Home = () => {
	return (
		<div>
			<h2 className='title'>Let's Go Poke Moves!</h2>
			<img
				className='image'
				src='https://i.pinimg.com/originals/b0/f8/f3/b0f8f32cb74b8aac5cd76ac54ef422f9.png'></img>
			<p>
				Welcome to <strong>'Let's Go Poke Moves!'</strong>
				<br></br>
				Explore all of the moves any pokemon can learn from Generation I through
				Generation {} <br></br>
				Become a <i>Pokemon Master</i>
			</p>
		</div>
	);
};

export default Home;
