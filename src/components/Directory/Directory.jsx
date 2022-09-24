import React from "react";
import "./Directory.scss";
import { images } from "../../constants/images";

const Directory = () => {
  return (
    <div className="directory flex__row__center">
      <div className="directory__man flex__column__center">
        <a href="/">MAN</a>
      </div>
      <div className="directory__woman flex__column__center">
        <a href="/">WOMAN</a>
      </div>
    </div>
  );
};

export default Directory;
