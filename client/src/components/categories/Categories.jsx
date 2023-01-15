import React from 'react';
import {Link} from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__col">
        <div className="categories__row">
          <img
            src="https://images.pexels.com/photos/1135531/pexels-photo-1135531.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          ></img>
          <button>
            <Link className="categories__link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="categories__row">
          <img
            src="https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          ></img>
          <button>
            <Link className="categories__link" to="/products/2">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="categories__col">
        <div className="categories__row">
          <img
            src="https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          ></img>
          <button>
            <Link className="categories__link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>

      <div className="categories__col categories__col-lg">
        <div className="categories__row">
          <div className="categories__col">
            <div className="categories__row">
              <img
                src="https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              ></img>
              <button>
                <Link className="categories__link" to="/products/1">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="categories__col">
            <div className="categories__row">
              {" "}
              <img
                src="https://images.pexels.com/photos/2285939/pexels-photo-2285939.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              ></img>
              <button>
                <Link className="categories__link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="categories__row">
          {" "}
          <img
            src="https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          ></img>
          <button>
            <Link className="categories__link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;