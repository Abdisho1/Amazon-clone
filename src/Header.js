import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/" className="header__clearlink">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="delivering__address">
          <LocationOnIcon className="location" />
          <div>
            <p>Delivering to Charlotte 28202</p>
            <h5>Choose location for most accurate options</h5>
          </div>
        </div>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <Link to='/search'>
            <SearchIcon className="header__searchIcon" />
          </Link>
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"} className="header__clearlink">
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? " " : user.email}{" "}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders" className="header__clearlink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout" className="header__clearlink">
            <div className="headre__optionBasket">
              <ShoppingCartOutlinedIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="all">
        <p>
          <MenuOutlinedIcon />
        </p>
        <p className="secondP">All</p>
        <p>Medical Care</p>
        <p>Best Sellers</p>
        <p>Customer Service</p>
        <p>Amazon Basics</p>
        <p>Music</p>
        <p>Prime</p>
        <p>New Releases</p>
        <p>Today's deals</p>
        <p>Books</p>
        <p>Registry</p>
        <p>Fashion</p>
        <p className="lastP">Shop Black Business Month</p>
      </div>
    </>
  );
}

export default Header;
