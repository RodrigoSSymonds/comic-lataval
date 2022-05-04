import React from "react";
import { useEffect, useState } from "react";
import {saveSuggestedTranslation} from "../functions"

function SuggestedTranslation({currentDialog, JSON, suggestedTranslation, setSuggestedTranslation}) {
    
    useEffect(() => {
        if (!JSON) return;
		setSuggestedTranslation(
			JSON?.dialogs?.[currentDialog]?.es_final || ""
		);
	}, [JSON, currentDialog]);

  return (
    <div className="bg-red-300 flex flex-col justify-center items-center min-w-[33%] rounded-md grow p-3">
      <h4 className=" text-xl">Sugerencia</h4>
      <textarea
        className=" rounded-md h-2/3 w-5/6 max-w-[75%] mx-auto my-3 text-center text-black"
        value={suggestedTranslation }
        id="suggestedTranslation"
        placeholder="Sin sugerencia"
        onChange={(e) => setSuggestedTranslation(e.target.value)}
      />
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => saveSuggestedTranslation(suggestedTranslation, currentDialog, JSON)} 
      >
        Guardar
      </button>
    </div>
  );
}

export default SuggestedTranslation;
