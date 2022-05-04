import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {getComicsFromStrapi} from "../functions";
import {startProcess} from "../functions";
import { endProcess } from "../functions";

function ComicList({
    
}) {


    const [comicsArray, setComicsArray] = useState(null);
    useEffect(()=>{
        async function getComicData(){
            const comicData = await getComicsFromStrapi();
            setComicsArray(comicData);
        }
        getComicData();
    }, [])

  return (

    <section className="comicList">
        <div className="ttlComics p-6">
            <h1>Comics</h1>
            Número total de comics pendientes: {comicsArray ? comicsArray.length : 0}
        </div>

        <div className="">
            <div className="basic-grid">


                {comicsArray ?  comicsArray.map((comic) => (
                    <a href={`/comic/${comic.id}`}>             
                    <div className="card">
                        <img src={comic?.Cover?.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-dark">{comic.Title}</h5>
                  
                        </div>
                    </div>
                    </a>
               
                )) : <section id="loadingScreenComic"><img src="\src\assets\loading.gif"/></section>}

            </div>
        </div>
    
    </section>
   
  );
}

export default ComicList;
