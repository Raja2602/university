import React from "react";
import hamburger from "./images/hamburger.png";
function Header({click})
{
 return(
   
    <div className="Header">
     <img src={hamburger} alt="menu" onClick={click}/>
     <span>menu</span>
     </div>
   


 )

}
export default Header