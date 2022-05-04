import generateB64ImgFromId from './generateB64ImgFromId';
import convertB64toBlob from './convertB64toBlob';
import sendPictureAndJsonToStrapi from './sendPictureAndJsonToStrapi';
import startProcess from './startProcess';
import endProcess from './endProcess';
import ip from '../constants/ip';


export default async function generateAndUploadImgToStrapi(
	imageName = 'noName',
	json = JSON,

) {
	
	startProcess();
	// Generamos imagen base64
	const b64Img = await generateB64ImgFromId();
	// Convertimos imagen base64 a blob
	const blob = convertB64toBlob(b64Img);
	// Subimos imagen blob a Strapi
	var formdata = new FormData();
	formdata.append('files', blob, imageName);
	var requestOptions = {
		method: 'POST',
		body: formdata,
		redirect: 'follow',
	};
	// TODO: devolver respuesta de Strapi y error-handling
	// TODO: Implementar autenticación en request de carga de imagen


	fetch(
		ip+'/upload',
		requestOptions
	)
		.then(response => response.text())

		.then(response => JSON.parse(response))
		.then(response => sendPictureAndJsonToStrapi(response[0].url, json))
		.catch(error => console.log('error', error))
		.finally(() => endProcess());
}
