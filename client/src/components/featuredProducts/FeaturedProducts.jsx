import React from 'react';
import Card from "../card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({type}) => {

const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className="featured-products">
      <div className="featured-products__left">
        <h1>{type} Products</h1>
        <div className="featured-products__right">
          <p>
            Maecenas fringilla non risus ullamcorper luctus. Curabitur ultrices
            massa nec massa volutpat, a fermentum justo blandit. Pellentesque
            lacus tellus, pulvinar nec efficitur in, dapibus id massa. Nunc
            consectetur dapibus mi, sed vestibulum diam maximus tincidunt. Sed
            semper, diam vitae fermentum iaculis, sem sem ultrices orci, a
            volutpat odio lacus et libero. Curabitur finibus mi a fermentum
            fermentum. Sed a tellus eget mauris bibendum ultrices et eget quam.
          </p>
          <div className="featured-products__cards">
            {error?"something went wrong!":loading?"loading":data.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts