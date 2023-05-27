import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from "../Card/Card";
import './FeaturedProducts.scss';
import axios from 'axios';

const FeaturedProducts = ({type}) => {

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`http://localhost:5678/api/products?populate=*&[filters][type][$eq]=${type}`, 
				{
						headers: {
							Authorization: "Bearer" + process.env.REACT_APP_API_TOKEN,

						},
					}
				);
				console.log(res);
				setData(res.data.data);
			}catch (err) {
				console.log(err);
			}
		};
		fetchData();
	},[])


	return (
		<div className="featuredProducts">
			<div className="top">
				{/* <h1>{data.map (type => <div>{data.type}</div>)} products</h1> */}
				<h1>{type} products</h1>
				<h3>Our amazing anime brand clothing is a testament to our passion for Japanese animation, with each design capturing the essence of beloved characters and iconic moments. The attention to detail and quality craftsmanship of our apparel showcases our commitment to providing fans with a truly immersive and authentic experience. From vibrant, intricately embroidered jackets to stylish graphic tees that evoke nostalgia, our anime brand clothing is a perfect fusion of fashion and fandom, making it a must-have for anime enthusiasts everywhere.</h3>
			</div>
			<div className='container'>
				<div className="bottom">
					{data.map(item => (
						<Card item={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;