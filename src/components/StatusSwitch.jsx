import React from "react";
import updatePageStatus from "../functions/updatePageStatus";

function StatusSwitch({currentImage, currentStatus, JSON}) {


  React.useEffect(()=> {
    //alert(currentStatus);
    if(currentStatus === 'done')document.getElementById("done").checked = true;
    if(currentStatus === 'in_progress')document.getElementById("in_progress").checked = true;
    if(currentStatus === 'in_correction')document.getElementById("in_correction").checked = true;


  },[currentImage, currentStatus, JSON]);
  return (
    <section className="bg-purple-300 flex d-flex justify-content-around   rounded-md p-3 w-100 ">
  
      
      <p>Página <span id="pageNum" >{currentImage}</span>:</p>
     
      <div className="statusRadio">
        <input type="radio" id="in_progress" name="status" value="in_progress" 
          defaultChecked={currentStatus == "in_progress"}
        />
        <label htmlFor="in_progress">En proceso</label>
      </div>

      <div className="statusRadio">
        <input type="radio" id="done" name="status" value="done" 
         defaultChecked={currentStatus == "done"}
         />
        <label htmlFor="done">Listo</label>
      </div>

      <div className="statusRadio">
        <input type="radio" id="in_correction" name="status" value="in_correction" 
         defaultChecked={currentStatus == "in_correction"}
         />
        <label htmlFor="in_correction">En corrección</label>
      </div>


    
    <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => updatePageStatus(JSON)} 
      >
        Guardar
      </button>
  
    </section>
   
  );
}

export default StatusSwitch;
