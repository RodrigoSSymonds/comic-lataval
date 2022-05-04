import React from "react";

const ToolBox = ({
  dialogs,
  setDialogs,
  selectedId,
  blurreds,
  setBlurreds,
  translation,
  suggestedTranslation
}) => {
  const [innerFontSize, setInnerFontSize] = React.useState(16);
  const [innerBorderRadius, setInnerBorderRadius] = React.useState(50);
  const [innerRotation, setInnerRotation] = React.useState(0);
  const [innerBackgroundColor, setInnerBackgroundColor] = React.useState("#ffffff");
  const [innerFontColor , setInnerFontColor] = React.useState("#000000");
  const [innerFontStyle, setInnerFontStyle] = React.useState(null);
  const defaultBox = {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    color: "#ff0000",
    text: "",
  };
  const defaultCensor = {
    bottom: 5,
    right: 5,
    width: 30,
    height: 5,
    backgroundColor: "#555555",
    color: "#ff0000",
    text: "",
  };

  function addBox() {
    setDialogs([
      ...dialogs,
      {
        ...defaultBox,
        id: Math.random().toFixed(5),
        text: translation,
        fontSize: innerFontSize,
        borderRadius:innerBorderRadius,
        rotation: innerRotation,
        fontColor: innerFontColor,
        fontStyle: innerFontStyle || "normal",
      },
    ]);
  }

  function addSuggested() {
    setDialogs([
      ...dialogs,
      {
        ...defaultBox,
        id: Math.random().toFixed(5),
        text: suggestedTranslation,
        fontSize: innerFontSize,
        borderRadius:innerBorderRadius,
        rotation: innerRotation,
        fontColor: innerFontColor,
        fontStyle: innerFontStyle,
      },
    ]);
  }

  function addBlurred() {
    setDialogs([
      ...dialogs,
      {
        ...defaultCensor,
        id: Math.random().toFixed(5),
        text: "",
        fontSize: innerFontSize,
        borderRadius:innerBorderRadius,
        rotation: innerRotation,
        fontColor: innerFontColor,
        fontStyle: innerFontStyle,
      },
    ]);
  }
  /*
  function addBlurred() {
    setBlurreds([
      ...blurreds,
      {
        ...defaultBox,
        id: Math.random().toFixed(5),
        text: suggestedTranslation,
      },
    ]);
  }*/
  /* function addInput() {
    setBoxes([...inputs, { ...defaultBox, id: Math.random().toFixed(5) }]);
  } */

React.useEffect(()=> {
  if (selectedId) {
    const newBoxes = dialogs.map((box) => {
      console.log("en mapeo", innerFontStyle)
      if (box.id === selectedId) {
        return { ...box, fontStyle: innerFontStyle };
      }
      return box;
    });
    setDialogs(newBoxes);
  }


}, [innerFontStyle]);

  return (
    <section  id="toolkit" className="bg-blue-300 flex  justify-evenly items-center min-w-[50%] rounded-md p-3">
       <div className="inputBox">
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={addBox}>Agregar Diálogo</button>
      </div>

      <div className="inputBox">
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={addSuggested}>Agregar Sugerido</button>
      </div>
      <div className="inputBox">
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={addBlurred}>Agregar Censura</button>
      </div>

      <div className="inputBox">
      <span>Cambiar letra</span>
      <input
      className="max-w-[75px]"
        type="number"
        onChange={(e) => {
          setInnerFontSize(e.target.value);
          if (selectedId) {
            const newBoxes = dialogs.map((box) => {
              if (box.id === selectedId) {
                return { ...box, fontSize: +innerFontSize };
              }
              return box;
            });
            setDialogs(newBoxes);
          }
        }}
      />
      </div>
      <div className="inputBox">
      <span>Borde</span>

      <input
        type="number"
      className="max-w-[75px]"

        onChange={(e) => {
          setInnerBorderRadius(e.target.value);
          if (selectedId) {
            const newBoxes = dialogs.map((box) => {
              if (box.id === selectedId) {
                return { ...box, borderRadius: +innerBorderRadius };
              }
              return box;
            });
            setDialogs(newBoxes);
          }
        }}
      />
      </div>
      <div className="inputBox">
    <span>Rotación</span>

      <input
        type="number"
      className="max-w-[75px]"


        onChange={(e) => {
          setInnerRotation(e.target.value);
          if (selectedId) {
            const newBoxes = dialogs.map((box) => {
              if (box.id === selectedId) {
                return { ...box, rotation: +innerRotation };
              }
              return box;

            });
            setDialogs(newBoxes);
          }
        }}
      />
      </div>

      <div className="inputBox">
      <span>Fondo</span>

      
      <input
        type="color"
      className="max-w-[75px]"

        onChange={(e) => {
          setInnerBackgroundColor(e.target.value);
          if (selectedId) {
            const newBoxes = dialogs.map((box) => {
              if (box.id === selectedId) {
                return { ...box, backgroundColor: innerBackgroundColor };
              }
              return box;
            });
            setDialogs(newBoxes);
          }
        }}
      />
      </div>
      <div className="inputBox">
      <span>Letra</span>
      <input
        type="color"
      className="max-w-[75px]"

        onChange={(e) => {
          setInnerFontColor(e.target.value);
          if (selectedId) {
            const newBoxes = dialogs.map((box) => {
              if (box.id === selectedId) {
                return { ...box, fontColor: innerFontColor };
              }
              return box;
            });
            setDialogs(newBoxes);
          }
        }}
      />

      </div>
      
      <div className="inputBox">
      <span>Estilo</span>
      <select
      className="max-w-[75px]"

        onChange={(ev) => {
          setInnerFontStyle(ev.target.value);
         
        }}
      >
        <option value="normal">Normal</option>
        <option value="bold">Negrita</option>
        <option value="italic">Cursiva</option>
        <option value="bold italic">Negrita Cursiva</option>

      </select>

      </div>

        


     
      
      
     
    </section>
  );
};
export default ToolBox;
