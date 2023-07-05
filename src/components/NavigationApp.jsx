import React from "react";
import routes from "../routes/routes";
import { Link } from "react-router-dom";

function NavigationApp() {
  return (
    <>
      {routes.map((item) => {
        return (
          <>
            <Link to={item.url}>{item.label}</Link>
          </>
        );
      })}
    </>
  );
}

export default NavigationApp;
