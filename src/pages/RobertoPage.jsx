import React from "react";
import rosa from "../assets/images/img_3.jpg";
import NavigationApp from "../components/NavigationApp";
import { AiOutlineArrowLeft } from "react-icons/ai";

const RobertoPage = () => {
  return (
    <div>
      <div className="container2">
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="centro">
            <img className="img" src={rosa} />
          </div>
        </div>

        <div className="skills">
          <h1 className="heading">Roberto Carvalho</h1>
          <ol>
            <li className="text-skills">Curiosidade</li>
            <li className="text-skills">Perseverança</li>
            <li className="text-skills">Bondade</li>
            <li className="text-skills">Gosto pela aprendizagem</li>
          </ol>
          <button className="soft-skills">
            <AiOutlineArrowLeft />
            <NavigationApp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RobertoPage;
