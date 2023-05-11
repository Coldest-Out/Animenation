import React from 'react';
import './FeaturedProducts.scss';

const FeaturedProducts = (type) => {

	const data = [
		{
			id: 1,
			img: "../../../public/img/anime-longsleeve1.jpg",
			img2: "../../../public/img/anime-longsleeve1.jpg",
			title: "Long Sleeve Graphic T-Shirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 2,
			img: "../../../public/img/anime-coat1.jpg",
			img2: "../../../public/img/anime-coat2.jpg",
			title: "Anime Coat",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 3,
			img: "../../../public/img/anime-pants1.jpg",
			img2: "../../../public/img/anime-pants2.jpg",
			title: "Anime Pants",
			oldPrice: 19,
			price: 12,
		},
		{
			id: 3,
			img: "../../../public/img/anime-hat1.jpg",
			img2: "../../../public/img/anime-hat2.jpg",
			title: "Anime Hats",
			oldPrice: 19,
			price: 12,
		}
	]


	return (
		<div className="FeaturedProducts">
			<div className="top">
				<h1>{type} products</h1>
				<p>Our amazing anime brand clothing is a testament to our passion for Japanese animation, with each design capturing the essence of beloved characters and iconic moments. The attention to detail and quality craftsmanship of our apparel showcases our commitment to providing fans with a truly immersive and authentic experience. From vibrant, intricately embroidered jackets to stylish graphic tees that evoke nostalgia, our anime brand clothing is a perfect fusion of fashion and fandom, making it a must-have for anime enthusiasts everywhere.</p>
			</div>
			<div className="bottom">

			</div>
		</div>
	);
};

export default FeaturedProducts;