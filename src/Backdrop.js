import React from "react";
function Backdrop({click,open})
{

return(
<div className={open?"backdrop backdrop-open":Backdrop} onClick={click}>




</div>

)

}
export default Backdrop