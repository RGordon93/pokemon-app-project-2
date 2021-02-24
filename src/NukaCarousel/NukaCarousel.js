import React from 'react';
import Carousel from 'nuka-carousel';
import './NukaCarousel.css';
const NukaCarousel = () => {
    return (
			<div>
				<Carousel
					className='carousel-images'
					width={750}
					height={500}
					withoutControls={true}
					autoplay={true}
					autoplayInterval={5000}>
					{/* <img src='https://i.pinimg.com/originals/b0/f8/f3/b0f8f32cb74b8aac5cd76ac54ef422f9.png'></img> */}
				</Carousel>
			</div>
		);
};

export default NukaCarousel;