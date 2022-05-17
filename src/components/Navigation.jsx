import React from 'react';
import { generateB64ImgFromId } from '../functions';
import { sendPictureAndJsonToStrapi } from '../functions';
import { generateAndUploadImgToStrapi } from '../functions';
import {finishEpisode} from '../functions';

function Navigation({
	setCurrentImage,
	currentImage,
	saveImage,
	shallowJSON,
	images,
	JSON,
	pagesArray,
}) {
	return (
		<section className="bg-red-300 flex flex-col w-100  rounded-md p-3  ">
			<span id="buttons-nex-prev" className="flex justify-between my-2 w-full ">
				<button
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => {
						if (currentImage > 0) {
							setCurrentImage(currentImage - 1);
						}
					}}>
					Anterior
				</button>

				<div>
				<label>Página</label>
				<br/>
				<select
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				onChange={(e) => {
					setCurrentImage(e.target.value-1);
				}}>
					
					{pagesArray ?  pagesArray.map((page, index) => (
						<option key={index+1} value={index+1}>	{index+1}</option>
               
                )) :""}

			

					

				</select>
				</div>
				<button
					className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
					onClick={() => saveImage( "canvasCont" ,true)}>
					Guardar Imagen
				</button>

				<button
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => {
						if (currentImage < images.length - 1) {
							setCurrentImage(currentImage + 1);
						}
					}}>
					Siguiente
				</button>
			</span>
			<span id="buttons-nex-prev" className="flex justify-between my-2 w-full ">
			

			<button 
				className="bg-slate-900 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
				onClick={() => generateAndUploadImgToStrapi(JSON.comic_title_es+"_"+JSON.episode_number+"_"+JSON.page_number+".jpg",JSON)}>
					{' '}
					Enviar Página
				</button>
				<button 
				className="bg-slate-900 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
				onClick={() => generateAndUploadImgToStrapi(JSON.comic_title_es+"_"+JSON.episode_number+"_"+JSON.page_number+".jpg",JSON)}>
					{' '}
					Regresar a episodio
				</button>
				<button 
				className="bg-slate-900 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
				onClick={() => finishEpisode(pagesArray)}>
					{' '}
					Terminar Episodio
				</button>
			
			</span>
		</section>
	);
}

export default Navigation;
