import React from "react";
import Box from "./Box";
import {useState, useEffect} from "react";
import Blurred from "./Blurred";
import { generateB64ImgFromId } from "../functions";
import {convertSrcToB64} from "../functions";


import { Rnd } from "react-rnd";
function ImageSection({
  currentImage,
  dialogs,
  setDialogs,
  selectedId,
  setSelectedId,
  blurreds,
  setBlurreds,
  rotation,
  contColor,
}) {


 const [b64Img, setB64Img ]= useState(null);
 convertSrcToB64(currentImage);
 

 useEffect(()=>{

  const b64 = convertSrcToB64(currentImage).then(b64=>{
    setB64Img(b64);
  });
         
  }, [currentImage]);


 


  return (
   
    <div
      id="canvasCont"
      className="relative   "
    >
      {dialogs.map((dialog) => (
        <Box
          text={dialog.text}
          key={dialog.id.toString()}
         rotation={dialog.rotation}
         fontColor={dialog.fontColor}
          numberProps={dialog.id}
          fontSize={dialog.fontSize}
          setSelectedId={setSelectedId}
          selectedId={selectedId}
          borderRadius={dialog.borderRadius}
          backgroundColor={dialog.backgroundColor}
          fontStyle={dialog.fontStyle}
        />
      ))}
      {blurreds.map((blurred) => (
        <Blurred />
      ))}

      <img id="canvasContImg" className="w-full h-auto" src={b64Img} />
    </div>
  );
}

export default ImageSection;
