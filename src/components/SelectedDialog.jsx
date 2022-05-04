import React from "react";

function SelectedDialog({ dialogs, selectedId, setDialogs, setSelectedId }) {
  return (
    <section className="bg-red-300 flex flex-col   rounded-md p-3 w-1/2  ">
    <div>
      ID seleccionado:{selectedId}
      <hr/>
      <div className="text-center pt-2">
      <button
        className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setDialogs(dialogs.filter((dialog) => dialog.id !== selectedId));
          setSelectedId(null);
        }}
      >
        Eliminar
      </button>
      </div>
    </div>
    </section>
  );
}

export default SelectedDialog;
