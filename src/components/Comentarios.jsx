import React from "react";

function Comentarios({
  setTranslation,
  saveModification,
  translation,
  currentDialog,
  JSON,
}) {
  return (
    <div className="bg-green-300 flex flex-col justify-center items-center min-w-[33%] rounded-md grow p-3">
      <h4 className=" text-xl">Traducción</h4>
      <textarea
        className=" rounded-md h-2/3 w-5/6 max-w-[75%] mx-auto my-3 text-center text-black"
        placeholder={JSON.dialogs ? JSON?.dialogs[currentDialog]?.es :  "Sin traducción"}
        value={translation}
        id="commentInput"
        /*onChange={(e) => setTranslation(JSON?.dialogs[currentDialog]?.es )}*/
        readOnly={true}
  
      />
     
    </div>
  );
}

export default Comentarios;
