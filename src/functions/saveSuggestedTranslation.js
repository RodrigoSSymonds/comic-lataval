import ip from '../constants/ip.js';
export default function saveSuggestedTranslation(suggestedTranslation, currentDialog, json) {
    const targetUrl = ip+'comic-templates/'+json.id;
    console.log(json);



    let dialogs = json.dialogs;
    dialogs[currentDialog].es_final = suggestedTranslation.value;
    const j = {
        dialogs: dialogs,
    }

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
        .then(response => console.log(response))
		.catch(error => console.log('error', error));

    


}