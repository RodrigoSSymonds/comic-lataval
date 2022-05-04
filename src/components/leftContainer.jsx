import React from "react";
import Section from "../components/Section";
import Div from "../components/Div";
import Box from "./Box.jsx";
import Input from "./Input";

const ImgContainer = ({ boxes, setBoxes, currentImage }) => {
  //states
  const [selectedId, setSelectedId] = React.useState(null);

  return (
    <Section className="image-container" id="canvasCont">
      <Div currentImage={currentImage} className="image-wrapper"></Div>
    </Section>
  );
};
export default ImgContainer;
