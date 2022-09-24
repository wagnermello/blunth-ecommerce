import React from "react";
import Directory from "../../components/Directory/Directory";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="app__wrapper">
      <div className="home container__wrapper">
        <Directory />
      </div>
    </section>
  );
};

export default HomePage;
