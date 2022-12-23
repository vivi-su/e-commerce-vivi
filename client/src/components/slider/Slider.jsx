import React, {useState} from 'react';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import './Slider.scss';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0? 2: (prev)=>prev -1);
  }

  const nextSlide = () =>{
    setCurrentSlide(currentSlide === 2? 0: (prev)=> prev+1)
  }

  return (
    <>
      <div className="slider">
        <div className="slider__container"
        style={{transform:`translate(-${currentSlide*100}vw)`}}>
          <img src={data[0]} alt="slide 0"></img>
          <img src={data[1]} alt="slide 1"></img>
          <img src={data[2]} alt="slide 2"></img>
        </div>
        <div className="slider__icons">
          <div className="slider__icon" onClick={prevSlide}>
            <ArrowBackOutlinedIcon />
          </div>
          <div className="slider__icon" onClick={nextSlide}>
            <ArrowForwardOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider