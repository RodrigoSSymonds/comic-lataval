import ip from '../constants/ip.js';
import startProcess from './startProcess.js';
import endProcess from './endProcess.js';
export default function finishEpisode(json) {
    startProcess();

    const episodeNumber = window.location.href.split("/").pop()
    const targetUrl = ip+'episodios/'+episodeNumber;
    var missingPages="";
    var isValid = true;  
    var requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',

    };
    fetch(
		targetUrl,
		requestOptions
	).then(response => response.json())
    .then(response => {

   //console.log("first part");
   //console.log(response);
    for (let i = 0; i < response.pages.length; i++) {
        console.log("page "+i +": "+response.pages[i].status);
       if(response.pages[i].status!="done"){
           missingPages += i+1+", ";
           isValid = false;
       }
    }
    if(isValid) {

  
    let newJson = {
                status: "done"
    };
    newJson = JSON.stringify(newJson);
    var requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newJson,
        redirect: 'follow',

    };
  
   
    fetch(
		targetUrl,
		requestOptions
	)
		.then(response => response.text())
        .then(response => JSON.parse(response))
		.catch(error => console.log('error', error))
        .finally(() => endProcess());

    

    }else{
        alert("El episodio no puede terminar porque las siguienetes páginas están sin completar: "+ missingPages);
        endProcess();
    }
})
}