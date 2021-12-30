import React from "react";
import ComponentSocial from "../social";

import "./style.css";

function ComponentNavBar() {
  return (
    <div className="App ">
      <h1>WPS Cripto</h1>
      <div className="text-center mt-15 icons">
        <ComponentSocial />
      </div>
    </div>
  );
}

export default ComponentNavBar;
