import React from "react";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";

function App() {
  const[open,setOpen]=useState(false);
  const handleClick=()=>{
    setOpen(!open);
  }
  return (
    <div className="App">
        <Header click={handleClick}/>
        <Backdrop click={handleClick} open={open}/>
        <Sidebar open={open}/>
        
    </div>
  );
};
export default App