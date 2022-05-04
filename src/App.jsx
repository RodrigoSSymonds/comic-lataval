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
		<nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
		<div className="container">
			<a className="navbar-brand" href="#">
			<img src="\src\assets\logo.png" alt="..."  />
			</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
		
			</div>
		</div>
		</nav>
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
	<section id="loadingScreen"><img src="\src\assets\loading.gif"/></section>
	</main>

  );
}

export default App;