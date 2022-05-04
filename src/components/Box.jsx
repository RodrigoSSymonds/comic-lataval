import React from "react";
import { Rnd } from "react-rnd";

function Box({ fontSize, numberProps, text, setSelectedId, borderRadius, backgroundColor, rotation, fontColor, fontStyle }) {
  return (
    <Rnd
      default={{
        x:50,
        y: window.pageYOffset + 50,
        width: 200,
        height: 150,
      }}
    >
      <div
        onClick={(e) => {
          const id = e.target.id;
          if (id) setSelectedId(id);
        }}
        style={{  display: "flex", justifyContent: "center", alignItems: "center", minWidth: "100%", height: "100%", padding: "10px",fontSize: fontSize, borderRadius:  `${borderRadius}px`,color: fontColor, backgroundColor:backgroundColor, transform:`rotate(${rotation}deg)`}}
        id={numberProps}
        className={`  flex justify-center align-center  dialogBox text-center p-[5px] max-w-[30ch] overflow-hidden  ${fontStyle === "italic" ? "italic" : fontStyle=== "bold" ? "font-bold" : fontStyle === "bold italic" ? "font-bold italic" : "testing"}`}
        
      >
        {text}
        </div>
    </Rnd>
  );
}
export default Box;
