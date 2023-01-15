import {Link} from "react-router-dom";
import React, {useState, useRef} from 'react';
import { useSelector} from "react-redux";
import Cart from "../cart/Cart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const navRef = useRef();

  const showNavbar =() =>{
    navRef.current.classList.toggle("navbar__toggle");
  }

  return (
    <div className="navbar">
      <div ref={navRef} className="navbar__wrapper">
        <div className="navbar__left">
          <div className="navbar__arrow-group">
            <img
              src="/images/canada-flag.png"
              alt="Canada flag"
              className="navbar__flag"
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className="navbar__arrow-group">
            <span>CAD</span>
            <KeyboardArrowDownIcon />
          </div>
          <Link to="/products/2" className="navbar__link" onClick={showNavbar}>
            Women
          </Link>
          <Link to="/products/1" className="navbar__link" onClick={showNavbar}>
            Men
          </Link>
        </div>

        <Link to="/" className="navbar__link navbar__brand">
          Viishculza
        </Link>

        <div className="navbar__right">
          <Link to="/" className="navbar__link" onClick={showNavbar}>
            Home
          </Link>
          <Link to="/" className="navbar__link">
            About
          </Link>
          <Link to="/" className="navbar__link">
            Contact
          </Link>
          <Link to="/" className="navbar__link">
            Store
          </Link>
          <div className="navbar__icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="navbar__cart-icon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
        <button className="navbar__btn" onClick={showNavbar}>
          <CloseIcon />
        </button>
      </div>

      <Link to="/" className="navbar__link navbar__brand navbar__brand-mobile">
        Viishculza
      </Link>

      <button className="navbar__btn" onClick={showNavbar}>
        <MenuIcon />
      </button>

      <div
        className="navbar__btn navbar__btn--cart navbar__cart-icon"
        onClick={() => setOpen(!open)}
      >
        <ShoppingCartOutlinedIcon />
        <span>{products.length}</span>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar