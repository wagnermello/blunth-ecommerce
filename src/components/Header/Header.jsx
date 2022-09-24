import React from "react";
import { images } from "../../constants/images";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className=" flex">
      <div className="header flex__row__between">
        <img src={images.blunth_yellow} alt="" />
      </div>
    </header>
  );
};

export default Header;
