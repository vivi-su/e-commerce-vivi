import React,{ useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

      // const { data, loading, error } = useFetch(
      //   `/product?`)

  return (
    <div className="product">
      <div className="product__left">
        <div className="product__images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)}></img>
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)}></img>
        </div>
        <div className="product__main-img">
          <img src={images[selectedImg]} alt=""></img>
        </div>
      </div>
      <div className="product__right">
        <h1>Title</h1>
        <span className="product__price">$199</span>
        <p className="product__text">
          Sed eget tortor eget eros dapibus porta. Suspendisse eros tellus,
          placerat nec purus ut, hendrerit luctus tortor. Maecenas elementum,
          nisl eu tempus accumsan, mi risus accumsan mi, eget accumsan eros dui
          in dolor.
        </p>
        <div className="product__quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="product__add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="product__link">
          <div className="product__item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="product__item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>

        <div className="product__info">
          <span>Vendor: Polo</span>
          <span>Product Tyoe: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className="product__info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product
