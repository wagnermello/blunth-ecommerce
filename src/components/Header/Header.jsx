import React from "react";
import { images } from "../../constants/images";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="app__wrapper">
      <div className="header container__wrapper flex__row__between">
        <Link to="/">
          <img src={images.blunth_yellow} alt="" />
        </Link>
        <Link to="registration">Register</Link>
      </div>
    </header>
  );
};

export default Header;
