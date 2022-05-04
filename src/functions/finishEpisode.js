import ip from '../constants/ip.js';
import startProcess from './startProcess.js';
import endProcess from './endProcess.js';
export default function finishEpisode(json) {
    startProcess();
    console.log(json);
    var isValid = true;    
    for (let i = 0; i < json[i].pages; i++) {
       if(json.pages[i].status!="done"){
           isValid = false;
       }
    }
    if(isValid) {

    const episodeNumber = window.location.href.split("/").pop()
    const targetUrl = ip+'episodios/'+episodeNumber;
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
        alert("El episodio no puede terminar porque hay alguna pagina sin completar");
    }
}