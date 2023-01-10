import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  // const images = [
  //   "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   "https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  // ];

  return (
    <div className="product">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        "loading"
      ) : (
        <>
          <div className="product__left">
            <div className="product__images">
              <img
                src={
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              ></img>
              <img
                src={
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              ></img>
            </div>
            <div className="product__main-img">
              {selectedImg === "img" ? (
                <>
                  <img
                    src={
                
                      data?.attributes?.img?.data?.attributes?.url
                    }
                    alt=""
                  ></img>
                </>
              ) : (
                <img
                  src={
                    
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                ></img>
              )}
            </div>
          </div>
          <div className="product__right">
            <h1>{data?.attributes?.title}</h1>
            <span className="product__price">${data?.attributes?.price}</span>
            <p className="product__text">
              Sed eget tortor eget eros dapibus porta. Suspendisse eros tellus,
              placerat nec purus ut, hendrerit luctus tortor. Maecenas
              elementum, nisl eu tempus accumsan, mi risus accumsan mi, eget
              accumsan eros dui in dolor.
            </p>
            <div className="product__quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="product__add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
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
        </>
      )}
    </div>
  );
};

export default Product;
