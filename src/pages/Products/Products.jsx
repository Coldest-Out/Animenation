import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import List from '../../components/List/List';
import './Products.scss';
import { useParams } from 'react-router-dom';
import CategoryImg from '/img/categoryImg.png';
import useFetch from '../../hooks/useFetch';

const Products = () => {
	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);
	const [selectedSubCats, setSelectedSubCats] = useState([])

	const {data, loading, error} = useFetch(`/sub-categories?[filter][categories][id][$eq]=${catId}`)

	const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

	console.log(selectedSubCats);

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
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
				<div className="filterItem">
					<h2>Filter by Price</h2>
					<div className="inputItem">
						<span>0</span>
						<input type="range" min={0} max={1000}  onChange={(e) => setMaxPrice(e.target.value)}/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="filterItem">
					<h2>Soft by</h2>
					<div className="inputItem">
						<input type="radio" id='asc' value='asc' name='price' onChange={e => setSort('asc')}/>
						<label htmlFor="desc">Price (Lowest first)</label>
					</div>
					<div className="inputItem">
						<input type="radio" id='asc' value='asc' name='price' onChange={e => setSort('desc')}/>
						<label htmlFor="desc">Price (Highest first)</label>
					</div>
				</div>
			</div>
			<div className="right">
			<img className='catImg' src={CategoryImg}></img>
			<List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>

			</div>
		</div>
		</>
	)
}

export default Products;