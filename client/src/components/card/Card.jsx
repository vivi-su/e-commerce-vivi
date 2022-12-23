import React from 'react';
import "./Card.scss";
import {Link} from "react-router-dom";

const Card = ({item}) => {
  return (
    <Link to={`product/${item.id}`}>
      <div className="card">
        <div className="card__image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImg"></img>
          <img src={item.img2} alt="" className="secondImg"></img>
        </div>

        <h2 className='card__title'>{item.title}</h2>

        <div className="card__price">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card