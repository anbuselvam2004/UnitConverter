import React, { useRef } from "react";
import "./index.css"
import Conversion from "./Conversion";
const App=()=>{
  const inputRef=useRef(null);
const [unit,setUnits]=React.useState(0);

  const handleUnits=()=>{
    setUnits(inputRef.current.value)
  }
  const feet=((unit*0.3048).toFixed(2));
  const meter=(unit*3.28084).toFixed(2);
  const litres=(unit* 0.264172).toFixed(2)
  const gallons=(unit*3.78541).toFixed(2)
  const kilogram=(unit*2.20462).toFixed(2);
  const pounds=(unit*0.453592).toFixed(2);

  return(
    <div className="Container">
      <div className="header-container">
          <h1>Metric/Imperial Unit Conversion</h1>
          <input type="text" ref={inputRef} ></input>
          <button onClick={handleUnits}>Convert</button>
      </div>
      <div className="bottom-container">
            <Conversion unit={`Length (Meter/Feet)`} content={`${unit} meters = ${feet} feet | ${unit} feet = ${meter} meters`} />
            <Conversion unit={`Volume (Litres/Gallons)`} content={`${unit} litres = ${gallons} gallons | ${unit} gallons = ${litres} litres`} />
            <Conversion unit={`Mass (Kilograms/pounds)`} content={`${unit} Kilos = ${pounds} pounds | ${unit} pounds = ${kilogram}`}  />
            
      </div>
    </div>
  )
}

export default App