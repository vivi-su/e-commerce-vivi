import {Link} from "react-router-dom";
import React, {useState} from 'react';
import Cart from "../cart/Cart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__left">
          <img
            src="/images/canada-flag.png"
            alt="Canada flag"
            className="navbar__flag"
          />
          <KeyboardArrowDownIcon />
          <span>CAD</span>
          <KeyboardArrowDownIcon />
          <Link to="/products/1" className="navbar__link">
            Women
          </Link>
          <Link to="/products/2" className="navbar__link">
            Men
          </Link>
          <Link to="/products/3" className="navbar__link">
            Children
          </Link>
        </div>

        <Link to="/" className="navbar__link navbar__brand">
          Viishculza
        </Link>

        <div className="navbar__right">
          <Link to="/" className="navbar__link">
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
              <div className="navbar__cart-icon" onClick={()=> setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </div>
          </div>
          </div>
      </div>
          {open && <Cart />}
    </div>
  );
}

export default Navbar