import React from 'react';
import './List.scss';
import Card from '../Card/Card';

const List = () => {

	const data = [
		{
			id: 1,
			img: "../../../public/img/anime-longsleeve1.jpg",
			img2: "../../../public/img/anime-longsleeve1.jpg",
			title: "Anime T-Shirt",
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
			id: 4,
			img: "../../../public/img/anime-hat1.jpg",
			img2: "../../../public/img/anime-hat2.jpg",
			title: "Anime Hats",
			oldPrice: 19,
			price: 12,
		},
	];

	return (
		<div className="list">
			{/* {data?.map(item => (
			<Card item={item} key={item.id} />
		))} */}
		</div>
	);
};

export default List;