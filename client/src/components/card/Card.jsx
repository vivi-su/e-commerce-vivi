import React from 'react';
import "./Card.scss";
import {Link} from "react-router-dom";

const Card = ({item}) => {
  return (
    <Link to={`product/${item.id}`}>
      <div className="card">
        <div className="card__image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          ></img>
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          ></img>
        </div>

        <h2 className="card__title">{item?.attributes.title}</h2>

        <div className="card__price">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card