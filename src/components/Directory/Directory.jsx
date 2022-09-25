import React from "react";
import "./Directory.scss";

const Directory = () => {
  return (
    <div className="directory flex__row__center gap__x48">
      <div className="directory__card flex__column__center">
        <div className="directory__man flex__column__center">
          <a href="/">MAN</a>
        </div>
      </div>
      <div className="directory__card flex__column__center">
        <div className="directory__woman flex__column__center">
          <a href="/">WOMAN</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
