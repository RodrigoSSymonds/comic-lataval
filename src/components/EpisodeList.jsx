import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {getComicsFromStrapi} from "../functions";
import {getEpisodesFromComic} from "../functions";


function EpisodeList({
    
}) {


    const [episodesArray, setEpisodesArray] = useState(null);
    useEffect(()=>{

        async function getEpisodesData(){
            const episodesData = await getEpisodesFromComic(window.location.href.split("/").pop());
            setEpisodesArray(episodesData);        }
        getEpisodesData();
    }, [])

  return (

    <section className="comicList">
        <div className="ttlComics p-6">
            <h1>Episodios</h1>
            Lista de episodios del comic : {episodesArray ? episodesArray.length : 0}
        </div>

        <div className="">
            <div className="basic-grid">

            {episodesArray ?  episodesArray.map((episode) => (
                    <a href={`/episode/${episode.id}`}>             
                    <div className="card">
                        <img src={episode?.Cover?.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-dark">{episode.Title}</h5>
                  
                        </div>
                    </div>
                    </a>
               
                )) : <section id="loadingScreenComic"><img src="\src\assets\loading.gif"/></section>}



            </div>
        </div>
    
    </section>
   
  );
}

export default EpisodeList;
