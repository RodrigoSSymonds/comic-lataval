import ip from '../constants/ip.js';
export default function getPagesFromEpisode(episodeId) {

    return fetch(ip+"episodios/"+episodeId)
    .then((response) => {
    return  response.text();
    })
    .then((streamedText) => {
    var pagesInfo = JSON.parse(streamedText);
            return pagesInfo.pages;
    })
    .catch((error) => {
      console.error(error);
    });
 }