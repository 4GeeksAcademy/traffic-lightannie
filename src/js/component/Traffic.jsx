import React, {useState}  from "react";
<link ref= "stylesheet" href="styles.css"/>
//creat your first component*
export const Trafficligth = () => {
   const [selectedColor, setSelectedColor] = useState ("orange");
   return (
     <div classNAme="container mt-7">
        <div className="container d-table traffic-light w-auto rounded-4 left">
           <div onClickCapture={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? "glow" : "")}></div>
           <div onClickCapture={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor == "yellow" ? "glow" : "")}></div>
           <div onClickCapture={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? "glow" : "")}></div>
       </div>
         <div className= "pole"></div>
        </div>

    );

};
export default Trafficligth;