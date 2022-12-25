import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/list/List';
import "./Products.scss";

const Products = () => {

  // const param = useParams(); -> object, id:"1"
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="products__left">
        <div className="products__filter-item">
          <h2>Product Categories</h2>
          <div className="products__input-item">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="products__input-item">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="products__input-item">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="products__filter-item">
          <h2>Filter by price</h2>
          <div className="products__input-item">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="products__filter-item">
          <h2>Sort by</h2>
          <div className="products__input-item">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")} />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="products__input-item">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="products__right">
        <img
          src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className='products__cat-img'
        ></img>
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}

export default Products