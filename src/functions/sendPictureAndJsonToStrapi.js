import ip from '../constants/ip.js';
export default function sendPictureAndJsonToStrapi(picUrl, json) {
    const targetUrl = ip+'comic-templates/'+json.id;
    alert(picUrl);
    let newJson = {
                page_url_es: picUrl
    };
    newJson = JSON.stringify(newJson);
    console.log("json 2da parte",newJson);
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