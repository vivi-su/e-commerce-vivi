import React from 'react';
import Card from '../card/Card';
import "./List.scss";

const List = ({catId, maxPrice, sort}) => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1192607/pexels-photo-1192607.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Man Contrast Paneled Shirt",
      isNew: true,
      oldPrice: 32,
      price: 23,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Flap Pocket Denim Jacket",
      isNew: true,
      oldPrice: 54,
      price: 47,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Letter Embroidery Waffle Joggers",
      isNew: false,
      oldPrice: 63,
      price: 45,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Crew Neck Sweater",
      isNew: false,
      oldPrice: 82,
      price: 64,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1192607/pexels-photo-1192607.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Man Contrast Paneled Shirt",
      isNew: true,
      oldPrice: 32,
      price: 23,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Flap Pocket Denim Jacket",
      isNew: true,
      oldPrice: 54,
      price: 47,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Letter Embroidery Waffle Joggers",
      isNew: false,
      oldPrice: 63,
      price: 45,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Crew Neck Sweater",
      isNew: false,
      oldPrice: 82,
      price: 64,
    },
  ];

  return (
    <div className='list'>{data?.map(item =>(
        <Card item={item} key={item.id}/> 
    ))}</div>
  )
}

export default List