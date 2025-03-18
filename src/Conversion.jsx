import React from "react";
import "./index.css"
const Conversion=(props)=>{

    return(
        <>
            <div className="conversion">
                    <h1>{props.unit}</h1>
                    <p>{props.content}</p>
            </div>
        </>
    )
}

export default Conversion;