import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer__top">
        <div className="footer__item">
          <h2>Categories</h2>
          <p>Women</p>
          <p>Men</p>
          <p>Shoes</p>
          <p>Accessories</p>
          <p>New Arrivals</p>
        </div>
        <div className="footer__item">
          <h2>Links</h2>
          <p>FAQ</p>
          <p>Pages</p>
          <p>Stores</p>
          <p>Compare</p>
          <p>Cookies</p>
        </div>
        <div className="footer__item">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            odio sem, congue quis quam eu, bibendum dapibus leo.
          </p>
        </div>
        <div className="footer__item">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            odio sem, congue quis quam eu, bibendum dapibus leo. Pellentesque
            maximus sapien ultrices fringilla feugiat.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <img
          src="/images/payment_v.png"
          alt="Payment method"
          className="footer__payment-v"
        ></img>
        <div>
          <span className="footer__brand">VIISHCULZA</span>
          <span className="footer__copyright">
            © Copyright 2023 All Rights Reserved
          </span>
        </div>
        <img
          src="/images/payment.png"
          alt="Payment method"
          className="footer__payment"
        ></img>
      </div>
    </>
  );
}

export default Footer