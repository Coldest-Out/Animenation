import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import Anime1 from '../../../public/img/anime1.jpg';
import Anime2 from '../../../public/img/anime2.jpg';
import Anime3 from '../../../public/img/anime3.jpg';

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const data = [
		Anime1,
		Anime2,
		Anime3,
	];

	const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

	return (
		<div className="slider">
			<div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
				<img src={data[0]} alt="" />
				<img src={data[1]} alt="" />
				<img src={data[2]} alt="" />
			</div>
			<div className="icons">
				<button className="icon" onClick={prevSlide}>

					<WestOutlinedIcon />
				</button>
				<button className="icon" onClick={nextSlide}>
					<EastOutlinedIcon />
				</button>
			</div>
		</div>
	);
};

export default Slider;
