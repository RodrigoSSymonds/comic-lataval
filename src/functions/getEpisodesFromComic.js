import ip from '../constants/ip.js';
export default function getEpisodesFromComic(comicId) {

    return fetch(ip+'/comics/'+comicId)
    .then((response) => {
 
    return  response.text();
    })
    .then((streamedText) => {
      var epInfo = JSON.parse(streamedText);
      return epInfo.episodios;
    })
    .catch((error) => {
      console.error(error);
    });
 }