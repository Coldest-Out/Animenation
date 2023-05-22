import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Products.scss';

const Products = () => {
	return(
		<>
		{/* <br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/> */}
		<div className='products'>
			<div className="left">
				<div className="filterItem">
					<h2>Product Categories</h2>
					<div className="inputItem">
						<input type="checkbox" id='1' value={1}/>
						<label htmlFor="1">Shoes</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id='2' value={2}/>
						<label htmlFor="2">Skirts</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id='3' value={3}/>
						<label htmlFor="3">Coats</label>
					</div>
				</div>
				<div className="filterItem">
					<h2>Filter by Price</h2>
					<div className="inputItem">
						<span>0</span>
						<input type="range" min={0} max={500} />
						<span>1000</span>
					</div>
				</div>
				<div className="filterItem">
					<h2>Soft by</h2>
					<div className="inputItem">
						<input type="radio" id='asc' value='asc' name='price' />
						<label htmlFor="desc">Price (Lowest first)</label>
					</div>
					<div className="inputItem">
						<input type="radio" id='asc' value='asc' name='price' />
						<label htmlFor="desc">Price (Highest first)</label>
					</div>
				</div>
			</div>
			<div className="right">

			</div>
		</div>
		</>
	)
}

export default Products;