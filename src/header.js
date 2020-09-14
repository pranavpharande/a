import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
function header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <button type="button" className="header__searchButton">
          ALL<div class="arrow-down"></div>
        </button>

        <input className="header__searchInput" type="text" />

        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello,Pranav</span>
          <span className="header__optionLinetwo">Account & List</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLinetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Try</span>
          <span className="header__optionLinetwo">Prime</span>
        </div>
      </div>
      <div className="header__optionBasket">
        <AddShoppingCartIcon />
        <span className="header__optionLinetwo header__basketCount">0</span>
      </div>
    </div>
  );
}

export default header;
