import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import Outfit1 from '/img/outfit1.png';
import Outfit2 from '/img/outfit2.png';
import Outfit3 from '/img/outfit3.png';
import Outfit4 from '/img/outfit4.png';
import Outfit5 from '/img/outfit5.png';


const Product = () => {
	const [selectedImage, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const images = [
		Outfit1,
		Outfit2,
		Outfit3,
		Outfit4,
		Outfit5,
	]

	return(
		<div className='product'>
			<div className="left">
				<div className="images">
					<img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
					<img src={images[1]} alt="" onClick={e => setSelectedImg(1)}/>
					<img src={images[2]} alt="" onClick={e => setSelectedImg(2)}/>
					<img src={images[3]} alt="" onClick={e => setSelectedImg(3)}/>
					<img src={images[4]} alt="" onClick={e => setSelectedImg(4)}/>
				</div>
				<div className="mainImg">
					<img src={images[selectedImage]} alt="" />
				</div>
			</div>
			<div className="right">
				<h1>Title</h1>
				<span className='price'>$19.99</span>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est totam itaque cupiditate quae! Deserunt nam quae maiores suscipit expedita ut eos, vel ullam voluptas!</p>
				<div className="quantity">
					<button onClick={() => setQuantity((prev) => prev ===1 ? 1 : prev-1)}>-</button>
					{quantity}
					<button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
				</div>
				<button className='add'>
					<AddShoppingCartIcon /> ADD TO CART
				</button>
				<div className="links">
					<div className="item">
						<FavoriteBorderIcon /> ADD TO WISHLIST
					</div>
					<div className="item">
						<BalanceIcon /> ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<span>Vendor: Animenation</span>
					<span>Product Type: Anime Cosplay</span>
					<span>Tag: Anime, Cosplay, Demon Slayer</span>
				</div>
				<hr />
				<div className="info">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>

			</div>
		</div>
	)
}

export default Product;