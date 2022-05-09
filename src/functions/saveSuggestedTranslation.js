import ip from '../constants/ip.js';
export default function saveSuggestedTranslation(suggestedTranslation, currentDialog, json) {
    const targetUrl = ip+'comic-templates/'+json.id;
    console.log(json);
    alert(suggestedTranslation);
    let dialogs = json.dialogs;
    dialogs[currentDialog].es_final = suggestedTranslation;
    const j = {
        dialogs: dialogs,
    }
    console.log(j);

    const newJson = JSON.stringify(j);
    console.log(newJson);
    
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
        .then(response => alert("Guardado"))
		.catch(error => console.log('error', error));

    


}