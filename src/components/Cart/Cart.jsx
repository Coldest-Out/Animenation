import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
	
	const data = [
		{
			id: 1,
			img: "/img/outfit1.png",
			title: "Upper Moon 2 Cosplay",
			desc: "Upper Moon 2 Cosplay",
			isNew: true,
			price: 19.99,
		},
		{
			id: 2,
			img: "/img/outfit2.png",
			title: "Mist Hashira Cosplay",
			desc: "Mist Hashira Cosplay",
			isNew: true,
			price: 19.99,
		},
		// {
		// 	id: 3,
		// 	img: "/img/outfit3.png",
		// 	title: "Tanjiro Cosplay",
		// 	desc: "Tanjiro Cosplay",
		// 	price: 19.99,
		// },
		// {
		// 	id: 4,
		// 	img: "/img/outfit4.png",
		// 	title: "Upper Moon One Cosplay",
		// 	desc: "Upper Moon One Cosplay",
		// 	price: 19.99,
		// },
		// {
		// 	id: 5,
		// 	img: "/img/outfit5.png",
		// 	title: "Nezuko Cosplay",
		// 	desc: "Nezuko Cosplay",
		// 	price: 19.99,
		// },
	];

	return (
		<div className='cart'>
			<h1>Products in your cart</h1>
			{data?.map((item) => (
				<div className="item" key={item.id}>
					<img src={item.img} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.desc?.substring(0, 100)}</p>
						<div className="price">1 x ${item.price}</div>
					</div>
					<DeleteOutlinedIcon className='delete'/>
				</div>
				
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>$39.98</span>
			</div>
			<button>PROCEED TO CHECKOUT</button>
			<span className='reset'>RESET CART</span>
			
		</div>
	);
};

export default Cart;