import React, { useState, useEffect } from 'react';
//comps
import ImageSection from './components/ImageSection';
import Dialogos from './components/Dialogos';
import Comentarios from './components/Comentarios';
import Navigation from './components/Navigation';
import Toolkit from './components/Toolkit.jsx';
import StatusSwitch from './components/StatusSwitch';
import SelectedDialog from './components/SelectedDialog';
import { generateAndUploadImgToStrapi, generateB64ImgFromId, sendPictureAndJsonToStrapi } from './functions';
import {BrowserRouter} from 'react-router-dom';

//importamos módulo con imagenes y jsons
import * as imagenes from './images';
import * as jsons from './json';
// convertimos módulo en array
const jsonsArray = Object.values(jsons);
const imagenesArray = Object.values(imagenes);

const App = () => {
	//states
	const [dialogs, setDialogs] = useState([]);
	const [blurreds, setBlurreds] = useState([]);

	const [currentImage, setCurrentImage] = useState(0);
	const [JSON, setJSON] = useState(jsonsArray[0]);
	const [numberOfDialogs, setNumberOfDialogs] = useState(JSON.dialogs.length);
	const [currentDialog, setCurrentDialog] = useState(0);
	const [suggestedTranslation, setSuggestedTranslation] = useState('');
	const [selectedId, setSelectedId] = React.useState(null);

	
	

	const shallowJSON = { ...JSON };


	function saveModification(textToSave) {
		shallowJSON.dialogs[currentDialog].es_final = textToSave;
		setSuggestedTranslation('');
	}
	
	if(JSON){
	useEffect(() => {
		setJSON(jsonsArray[currentImage]);
		setCurrentDialog(0);
		setNumberOfDialogs(jsonsArray[currentImage]?.dialogs.length);
		setSuggestedTranslation(
			jsonsArray[currentImage]?.dialogs[currentDialog]?.es
		);
	}, [currentImage]);
}
	useEffect(() => {
		setSuggestedTranslation(
			jsonsArray[currentImage]?.dialogs[currentDialog]?.es
		);
	}, [currentDialog]);

	useEffect(() => {
		setDialogs([]);
	}, [currentImage]);

	return (
		<main className="w-full h-full flex bg-white overflow-hidden m-0 relative">
			<section id="left-side" className="w-1/2 border-2 border-gray-600 ">
				<ImageSection
					currentImage={imagenesArray[currentImage]}
					dialogs={dialogs}
					setDialogs={setDialogs}
					blurreds={blurreds}
					setBlurreds={setBlurreds}
					selectedId={selectedId}
					setSelectedId={setSelectedId}
				/>
			</section>
			<section
				id="right-side"
				className="w-1/2 fixed top-0 right-0 flex flex-col justify-around bg-white p-3">
				
				
				

				
				<div className="flex w-full">
					<Dialogos
						numberOfDialogs={numberOfDialogs}
						currentDialog={currentDialog}
						setCurrentDialog={setCurrentDialog}
						JSON={JSON}
					/>
					<Comentarios
						setSuggestedTranslation={setSuggestedTranslation}
						/* saveModification={saveModification} */
						suggestedTranslation={suggestedTranslation}
						currentDialog={currentDialog}
						JSON={JSON}
					/>
				</div>
				<div className="flex w-full">
					<SelectedDialog
						setDialogs={setDialogs}
						selectedId={selectedId}
						dialogs={dialogs}
						setSelectedId={setSelectedId}
					/>

					<StatusSwitch
						currentStatus={jsonsArray[currentImage].status}
						currentImage={jsonsArray[currentImage].page.number}
					/>
				</div>

				<Toolkit
					dialogs={dialogs}
					selectedId={selectedId}
					setDialogs={setDialogs}
					blurreds={blurreds}
					setBlurreds={setBlurreds}
					suggestedTranslation={suggestedTranslation}
				/>
				<Navigation
					setCurrentImage={setCurrentImage}
					currentImage={currentImage}
					saveImage={generateB64ImgFromId}
					shallowJSON={shallowJSON}
					images={imagenesArray}
					JSON={JSON}
					sendPictureAndJsonToStrapi={sendPictureAndJsonToStrapi}
					generateAndUploadImgToStrapi = {generateAndUploadImgToStrapi}
				/>
			</section>
			<section id="loadingScreen"><img src="\src\assets\loading.gif"/></section>
		</main>
	);
};
export default App;
