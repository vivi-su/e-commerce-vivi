import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import List from '../../components/list/List';
import "./Products.scss";

const Products = () => {

  // const param = useParams(); -> object, id:"1"
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(300);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats]= useState([]);

  const {data} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

  console.log(catId);
  const handleChange = (e) =>{
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked?[...selectedSubCats, value]:selectedSubCats.filter((item)=> item !== value));
  };

  return (
    <div className="products">
      <div className="products__left">
        <div className="products__filter-item">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="products__input-item" key={item.id}>
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
        <div className="products__filter-item">
          <h2>Filter by price</h2>
          <div className="products__input-item">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={300}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="products__filter-item">
          <h2>Sort by</h2>
          <div className="products__input-item">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
              checked="checked"
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="products__input-item">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="products__right">
        {catId === 2 && (
          <img
            src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="products__cat-img"
          ></img>
        )}
        {catId === 1 && (
          <img
            src="https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="products__cat-img"
          ></img>
        )}
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
}

export default Products