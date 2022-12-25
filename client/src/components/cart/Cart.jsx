import React from 'react';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./Cart.scss";


const Cart = () => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1192607/pexels-photo-1192607.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Man Contrast Paneled Shirt",
      desc: "Suspendisse potenti. Nulla pharetra ut leo eget dictum. Etiam gravida, ipsum quis tincidunt lacinia, nulla turpis aliquam neque, sed posuere nunc purus at odio. Etiam ultricies ante turpis, vitae facilisis lacus volutpat pulvinar. Fusce iaculis fermentum facilisis. Curabitur commodo enim sit amet tempus ultricies. Curabitur interdum facilisis nisi, eget interdum velit mollis eu.",
      isNew: true,
      oldPrice: 32,
      price: 23,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Flap Pocket Denim Jacket",
      desc: "Suspendisse potenti. Nulla pharetra ut leo eget dictum. Etiam gravida, ipsum quis tincidunt lacinia, nulla turpis aliquam neque, sed posuere nunc purus at odio. Etiam ultricies ante turpis, vitae facilisis lacus volutpat pulvinar. Fusce iaculis fermentum facilisis. Curabitur commodo enim sit amet tempus ultricies. Curabitur interdum facilisis nisi, eget interdum velit mollis eu.",
      isNew: true,
      oldPrice: 54,
      price: 47,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="cart__item" key={item.id}>
          <img src={item.img} alt="" className='cart__image'/>
          <div className="cart__details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 50)}</p>
            <div className="cart__price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className='cart__delete'/>
        </div>
      ))}
        <div className='cart__total'>
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='cart__reset'>Reset Cart</span>
    </div>
  );
}

export default Cart