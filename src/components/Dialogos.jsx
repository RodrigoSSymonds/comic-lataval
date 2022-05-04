import React from "react";

function Dialogos({ numberOfDialogs, currentDialog, setCurrentDialog, JSON }) {
  return (
    <div className="bg-blue-300 flex flex-col justify-center items-center min-w-[33%] rounded-md p-3  ">
      <span id="dialogs-amount" className="self-start ">
        <h4 className=" text-xl">
          Dialogo <span className="font-bold">{currentDialog + 1}</span> de  <span className="font-bold">{numberOfDialogs}</span>
        </h4>
        
      </span>
      <div
        id="dialogs-text"
        className="bg-white rounded-xl w-5/6 mx-auto my-1 text-center py-3"
      >
        <p>{JSON.dialogs? JSON.dialogs[currentDialog] ? JSON.dialogs[currentDialog].cn : "Sin diálogo" : "Sin diálogo"}</p>
        {/* <span className="text-gray-400">---</span>
        <p>{JSON.dialogs[currentDialog].es}</p> */}
      </div>
      <div id="dialogs-buttons">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            if (currentDialog > 0) {
              setCurrentDialog(currentDialog - 1);
            }
          }}
        >
          <img src="\src\assets\previous.png" 
          style={{width: "20px", height: "20px"}}
          alt="..."  />
        </button>
        <span style={{ marginLeft: "1rem" }}></span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            if (currentDialog < numberOfDialogs - 1) {
              setCurrentDialog(currentDialog + 1);
            }
          }}
        >
          <img src="\src\assets\next.png"
                    style={{width: "20px", height: "20px"}}
                    alt="..."  />
        </button>
      </div>
    </div>
  );
}

export default Dialogos;
