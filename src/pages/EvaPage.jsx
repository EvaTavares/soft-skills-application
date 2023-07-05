import React from "react";
import evaimg from "../assets/images/eva-avatar.jpeg";
import NavigationApp from "../components/NavigationApp";
import { AiOutlineArrowLeft } from "react-icons/ai";

const EvaPage = () => {
  return (
    <div>
      <div className="container2">
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="centro">
            <img className="img" src={evaimg} />
          </div>
        </div>

        <div className="skills">
          <h1 className="heading">Eva Tavares</h1>
          <ol>
            <li className="text-skills">Liderança</li>
            <li className="text-skills">Criatividade</li>
            <li className="text-skills">Comunicação</li>
            <li className="text-skills">Trabalho em equipe</li>
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

export default EvaPage;
