import React from "react";
import Directory from "../../components/Directory/Directory";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="home flex__column__center">
      <div className="">
        <Directory />
      </div>
    </section>
  );
};

export default HomePage;
