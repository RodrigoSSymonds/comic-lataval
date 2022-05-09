import React, { useState, useEffect } from 'react';
import AppOriginal from "./AppOriginal";
import ComicList from "./components/ComicList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/comics.css';
import { Link } from "react-router-dom";
import { getComicsFromStrapi } from "./functions";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

///import * as comics from './comics/222';


//Rutas
import Comic from "./routes/comic";
import Episode from "./routes/episode";
import Page from "./routes/page";
import NotFound from './routes/notFound';

// convertimos módulo en array
//const comicsArray = Object.values(comics);



const App = () => {
	const [comics, setComics] = useState([]);
  return (
	  <main>
		
		<div className="container">
	  <BrowserRouter>
	  <Routes>
		  	<Route path="/" element={<ComicList comics={setComics} />}>	
			</Route>
			<Route path="comic/:id" element={<Comic/>}/>
			<Route path="episode/:id" element={<Episode/>}/>
			<Route path="*" element={<NotFound/>}/>
				
	  </Routes>

	</BrowserRouter>
	</div>
	<section id="loadingScreen"><img src="https://cutewallpaper.org/21/loading-gif-transparent-background/About-Our-Natural-Dry-Cat-Food-Rachael-Ray-Dry-Cat-Food.gif"/></section>
	</main>

  );
}

export default App;