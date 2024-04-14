import { useState } from "react";

const Bulb = () => {
    const [light, setLight] = useState("OFF");

    return (
        <div>
        {light === "ON" ? (
            <h1 style={{backgroundColor: "orange"}}>ON</h1>
        ) : (
            <h1 style={{backgroundColor: "gray"}}>OFF</h1>
        )} 

        <button onClick={()=>{
            setLight(light === "ON" ? "OFF" : "ON");
        }}>
            {light === "ON" ? "Turn OFF" : "Turn ON"}
        </button>
        </div>
    );
};

export default Bulb;