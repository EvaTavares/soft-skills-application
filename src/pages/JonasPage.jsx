import React from "react";
import jonasImg from "../assets/images/jonas-avatar.jpeg";
import NavigationApp from "../components/NavigationApp";
import { AiOutlineArrowLeft } from "react-icons/ai";

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
            <li className="text-skills">Resiliência</li>
            <li className="text-skills">Gosto pela aprendizagem</li>
            <li className="text-skills">Pensamento crítico</li>
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

export default JonasPage;
