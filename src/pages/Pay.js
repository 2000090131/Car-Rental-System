import React from "react";
import ReactDOM from "react-dom";

function Pay() 
{
  return (
    <img 
     src="https://i.pinimg.com/originals/05/67/41/05674100b1dd4a5f2c4b6daf4a522e25.jpg"
     alt="new"
     />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Pay />, rootElement);

export default Pay;