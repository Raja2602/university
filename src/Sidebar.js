import React from "react";
function  Sidebar({open})
{

    return(
        <div>
            <div className={ open?"sidebar collapse":"sidebar"}>
                <ul>
                    <li>Universities</li>
                    <li>Admission</li>
                </ul>
            </div>
            
        </div>

    )
}
export default Sidebar;