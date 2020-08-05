import React from "react";
// import logo from "./logo.svg";
import "./App.css";

const Toolbar = (props) => 
    <div>
      {props.filters.map(filter =>
        <button key={filter} onClick={() => props.onSelectFilter(filter)}>{filter}</button>
         )}
    </div>
  


export default Toolbar;
