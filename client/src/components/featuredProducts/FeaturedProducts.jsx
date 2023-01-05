import React from 'react';
import Card from "../card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({type}) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1192607/pexels-photo-1192607.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Man Contrast Paneled Shirt",
  //     isNew: true,
  //     oldPrice: 32,
  //     price: 23,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Flap Pocket Denim Jacket",
  //     isNew: true,
  //     oldPrice: 54,
  //     price: 47,
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Letter Embroidery Waffle Joggers",
  //     isNew: false,
  //     oldPrice: 63,
  //     price: 45,
  //   },
  //   {
  //     id: 4,
  //     img: "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Crew Neck Sweater",
  //     isNew: false,
  //     oldPrice: 82,
  //     price: 64,
  //   },
  // ];

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