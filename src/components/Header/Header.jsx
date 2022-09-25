import React from "react";
import { images } from "../../constants/images";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";

const Header = ({ currentUser, ...props }) => {
  return (
    <header className="app__wrapper">
      <div className="header container__wrapper flex__row__between">
        <Link className="flex__column__center" to="/">
          <img src={images.blunth_yellow} alt="" />
        </Link>
        {!currentUser ? (
          <div className="flex__row__between gap__x32">
            <Link to="registration">REGISTER</Link>
            <div className="splitter" />
            <span onClick={() => props.setShowLogin((prev) => !prev)}>
              LOGIN
            </span>
          </div>
        ) : (
          <span onClick={() => auth.signOut()}>LOGOUT</span>
        )}
        {/*--------------------PAREI AQUI----------------------*/}
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};
export default Header;
