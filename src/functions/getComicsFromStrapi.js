import ip from '../constants/ip.js';
export default function getComicsFromStrapi() {
    return fetch(ip+"/comics")
    .then((response) => {
    return  response.text();
    })
    .then((streamedText) => {
      return JSON.parse(streamedText)
    })
    .catch((error) => {
      console.error(error);
    });
 }