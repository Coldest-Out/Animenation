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
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';


const Product = () => {
	const id = useParams().id;
	const [selectedImage, setSelectedImg] = useState("img");
	const [quantity, setQuantity] = useState(1);

	// const images = [
	// 	Outfit1,
	// 	Outfit2,
	// 	Outfit3,
	// 	Outfit4,
	// 	Outfit5,
	// ]

	const dispatch = useDispatch();
	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
	console.log(data);

	return(
		<div className='product'>
			{ loading ? "loading" : ( <><div className="left">
				<div className="images">
					<img src={"http://localhost:5678" + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img")}/>
					<img src={"http://localhost:5678" + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img2")}/>
					{/* <img src={"http://localhost:5678" + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg(2)}/>
					<img src={"http://localhost:5678" + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg(3)}/>
					<img src={"http://localhost:5678" + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg(4)}/> */}
					{/* <img src={images[4]} alt="" onClick={e => setSelectedImg(4)}/> */}
				</div>
				<div className="mainImg">
					<img src={"http://localhost:5678" + data?.attributes[selectedImage]?.data?.attributes?.url} alt="" />
					{/* <img src={images[selectedImage]} alt="" /> */}
				</div>
			</div>
			<div className="right">
				<h1>{data?.attributes?.title}</h1>
				<span className='price'>{data?.attributes?.price}</span>
				<p>{data?.attributes?.desc}</p>
				<div className="quantity">
					<button onClick={() => setQuantity((prev) => prev ===1 ? 1 : prev-1)}>-</button>
					{quantity}
					<button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
				</div>
				<button className='add' onClick={() => dispatch(addToCart({
					id:data.id,
					title:data.attributes.title,
					desc: data.attributes.desc,
					price: data.attributes.price,
					img: data.attributes.img.data.attributes.url,
					quantity,

				}))}>
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

			</div></>
			)}
		</div>
	)
}

export default Product;