import ip from '../constants/ip.js';
export default function updatePageStatus(json) {
    const targetUrl = ip+'comic-templates/'+json.id;
    const newStatus = document.querySelector('input[name="status"]:checked').value;
    alert(newStatus);
    let newJson = {
                status: newStatus
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
        .then(response => console.log(response))
		.catch(error => console.log('error', error));

    


}