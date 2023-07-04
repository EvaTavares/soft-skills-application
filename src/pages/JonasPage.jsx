import React from "react";
import jonasImg from "../assets/images/jonas-avatar.jpeg";

const JonasPage = () => {
  return (
    <div>
      <div className="container2">
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="centro">
            <img className="img" src={jonasImg} />
          </div>
        </div>

        <div className="skills">
          <h1 className="heading">Jonas Silva</h1>
          <ol>
            <li className="text-skills">softs skills</li>
            <li className="text-skills">softs skills</li>
            <li className="text-skills">softs skills</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default JonasPage;
