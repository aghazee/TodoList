import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
    <h1 className="text-center">
        Master Your Day,  <br /> Every Day.
        </h1>
        <p>
               Become focused, organized,calm with <br />
          ListMagnet.Your Daily Success Routine.
        </p>
        <button class="home-btn p-2">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
