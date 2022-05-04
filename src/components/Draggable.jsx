import React from "react";
import { Resizable } from "re-resizable";

function Draggable() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Resizable
        style={{ background: "gray" }}
        defaultSize={{
          width: 200,
          height: 200,
        }}
      >
        001
      </Resizable>
    </div>
  );
}

export default Draggable;
