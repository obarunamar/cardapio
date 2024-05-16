import React from "react";
import "./home.css";
import img from "../assets/home.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-img">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Home;
