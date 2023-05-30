import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';


const Cart = () => {
	
	const dispatch = useDispatch();
	const products = useSelector(state => state.cart.products);
	const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

	const stripePromise = loadStripe('pk_test_51ND9pcA1tIo5mVZqgSQjINy7a4iwi4TuKn9h7rkEP9AcRXj2twTD5c5LVaTyblGlhW82T7WCvFFOU4SD9WSDlOhl00Z94gkwoB');

	const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

	return (
		<div className='cart'>
			<h1>Products in your cart</h1>
			{products?.map((item) => (
				<div className="item" key={item.id}>
					<img src={"http://localhost:5678" + item.img} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.desc?.substring(0, 100)}</p>
						<div className="price">{item.quantity} x ${item.price}</div>
					</div>
					<DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
				</div>
				
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>${totalPrice()}</span>
			</div>
			<button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
			<span className='reset' onClick={() => dispatch(resetCart())}>RESET CART</span>
			
		</div>
	);
};

export default Cart;