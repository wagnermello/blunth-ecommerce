import React from "react";
import { images } from "../../constants/images";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";

const Header = ({ currentUser, ...props }) => {
  const handleShowRegister = () => {
    props.setShowRegister((prev) => !prev);
    props.setShowLogin(false);
  };
  const handleShowLogin = () => {
    props.setShowLogin((prev) => !prev);
    props.setShowRegister(false);
  };

  return (
    <header className="app__wrapper">
      <div className="header container__wrapper flex__row__between">
        <Link className="flex__column__center" to="/">
          <img src={images.blunth_yellow} alt="" />
        </Link>
        {!currentUser ? (
          <div className="flex__row__between gap__x32">
            <span onClick={handleShowRegister}>REGISTER</span>
            <div className="splitter" />
            <span onClick={handleShowLogin}>LOGIN</span>
          </div>
        ) : (
          <span onClick={() => auth.signOut()}>LOGOUT</span>
        )}
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};
export default Header;
