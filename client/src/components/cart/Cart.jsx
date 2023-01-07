import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./Cart.scss";
import { removeItem, resetCart } from '../../redux/cartReducer';



const Cart = () => {

  const products = useSelector(state => state.cart.products);
   const dispatch = useDispatch();

  const totalPrice = () =>{
    let total = 0;
    products.forEach(item => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1192607/pexels-photo-1192607.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Man Contrast Paneled Shirt",
  //     desc: "Suspendisse potenti. Nulla pharetra ut leo eget dictum. Etiam gravida, ipsum quis tincidunt lacinia, nulla turpis aliquam neque, sed posuere nunc purus at odio. Etiam ultricies ante turpis, vitae facilisis lacus volutpat pulvinar. Fusce iaculis fermentum facilisis. Curabitur commodo enim sit amet tempus ultricies. Curabitur interdum facilisis nisi, eget interdum velit mollis eu.",
  //     isNew: true,
  //     oldPrice: 32,
  //     price: 23,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Flap Pocket Denim Jacket",
  //     desc: "Suspendisse potenti. Nulla pharetra ut leo eget dictum. Etiam gravida, ipsum quis tincidunt lacinia, nulla turpis aliquam neque, sed posuere nunc purus at odio. Etiam ultricies ante turpis, vitae facilisis lacus volutpat pulvinar. Fusce iaculis fermentum facilisis. Curabitur commodo enim sit amet tempus ultricies. Curabitur interdum facilisis nisi, eget interdum velit mollis eu.",
  //     isNew: true,
  //     oldPrice: 54,
  //     price: 47,
  //   },
  // ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="cart__item" key={item.id}>
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt=""
            className="cart__image"
          />
          <div className="cart__details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 50)}</p>
            <div className="cart__price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlineOutlinedIcon
            className="cart__delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="cart__total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span
        className="cart__reset"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
}

export default Cart