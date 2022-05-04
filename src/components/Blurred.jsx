import React from "react";
import { Rnd } from "react-rnd";

function Blurred({ styleProps, numberProps, text }) {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          filter: "blur(10px)",
        }}
      />
    </Rnd>
  );
}
export default Blurred;
