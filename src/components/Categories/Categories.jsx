import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';
import AnimeCat1 from '/img/anime-cat1.jpeg';
import AnimeCat2 from '/img/anime-cat2.png';
import AnimeCat3 from '/img/anime-cat3.jpeg';
import AnimeCat4 from '/img/anime-cat4.jpeg';
import AnimeCat5 from '/img/anime-cat5.png';
import AnimeCat6 from '/img/anime-cat6.jpeg';

const Categories = () => {
	return (
		<div className="categories">
			<div className="col">
				<div className="row">
					<img src={AnimeCat1} alt="" />
					<button>
						<Link className='link' to='/products/1'>Sale</Link>
					</button>
				</div>
				<div className="row">
				<img src={AnimeCat2} alt="" />
					<button>
						<Link className='link' to='/products/1'>Women</Link>
					</button>
				</div>
			</div>
			<div className="col">
				<div className="row">
				<img src={AnimeCat3} alt="" />
					<button>
						<Link className='link' to='/products/1'>New Season</Link>
					</button>
				</div>
			</div>
			<div className="col col-l">
				<div className="row">
					<div className="col">
						<div className="row"><img src={AnimeCat4} alt="" />
					<button>
						<Link className='link' to='/products/1'>Men</Link>
					</button></div>
					</div>
					<div className="col">
						<div className="row"><img src={AnimeCat5} alt="" />
					<button>
						<Link className='link' to='/products/1'>Accessories</Link>
					</button></div>
					</div>
				</div>
				<div className="row"><img src={AnimeCat6} alt="" />
					<button>
						<Link className='link' to='/products/1'>Shoes</Link>
					</button></div>
			</div>
		</div>
	)
}

export default Categories;