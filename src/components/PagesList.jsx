import React, { useState, useEffect } from 'react';
//comps
import ImageSection from './ImageSection';
import Dialogos from './Dialogos';
import Comentarios from './Comentarios';
import Navigation from './Navigation';
import Toolkit from './Toolkit.jsx';
import StatusSwitch from './StatusSwitch';
import SuggestedTranslation from './SuggestedTranslation';
import SelectedDialog from './SelectedDialog';
import { generateAndUploadImgToStrapi, generateB64ImgFromId, getPagesFromEpisode, sendPictureAndJsonToStrapi } from '../functions';

//importamos módulo con imagenes y jsons

// convertimos módulo en array
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
} 

const PagesList = () => {
    const [pagesArray, setPagesArray] = useState(null);
    const [picsArray, setPicsArray] = useState(null);
    useEffect(()=>{
        async function getPagesData(){
            //alert("getting comic data in PagesList");
            const pagesData = await getPagesFromEpisode(window.location.href.split("/").pop());
            const sortedPagesData = pagesData.sort((a, b) => (a.page_number > b.page_number) ? 1 : -1)

            var pics=[];
           
            for (let i = 0; i < sortedPagesData.length; i++) {
                pics.push(sortedPagesData[i].page_url_cn);
            }
            
            console.log("pics", pics);  //pics is an array of strings
            setPicsArray(pics);

        
            setPagesArray(sortedPagesData);
        }
        getPagesData();
    }, [])

    


	//states
	const [dialogs, setDialogs] = useState([]);
	const [blurreds, setBlurreds] = useState([]);
	const [currentImage, setCurrentImage] = useState(0);
	const [currentDialog, setCurrentDialog] = useState(0);
	const [suggestedTranslation, setSuggestedTranslation] = useState('');
    const [translation, setTranslation] = useState('');
	const [selectedId, setSelectedId] = React.useState(null);
    const [pageStatus, setPageStatus] = useState('');
    


	const jsonsArray = pagesArray;
    //const imagenesArray = Object.values(imagenes);
	const [JSON, setJSON] = useState(jsonsArray ? jsonsArray[0] : []);
    const [numberOfDialogs, setNumberOfDialogs] = useState(JSON.dialogs ? JSON.dialogs.length : 0);


	const shallowJSON = { ...JSON };


	function saveModification(textToSave) {
		shallowJSON.dialogs[currentDialog].es_final = textToSave;
		setSuggestedTranslation('');
	}
	

	useEffect(() => {
        if(jsonsArray){
		setJSON(jsonsArray[currentImage]);
		setCurrentDialog(0);
		setNumberOfDialogs(jsonsArray[currentImage]?.dialogs.length);
        setTranslation(jsonsArray?.[currentImage]?.dialogs?.[currentDialog]?.es);
        //alert(currentDialog);
	
       
    }
	},[currentImage, jsonsArray]);

    useEffect(() => {
        setTranslation(jsonsArray?.[currentImage]?.dialogs?.[currentDialog]?.es);
    },[currentDialog]);

    


 
    useEffect(() => {
        if(document.getElementById('suggestedTranslation')){
		setSuggestedTranslation(
			document.getElementById('suggestedTranslation').value
		);}
	}, [currentImage,jsonsArray, suggestedTranslation]);



	useEffect(() => {
		setDialogs([]);
	}, [currentImage]);
	return (	
        <main className="w-full h-full flex bg-white m-0 absolute top-0 left-0">

    	<section id="left-side" className="w-1/2  top-0 left-0  border-2 border-gray-600 ">
				<ImageSection
					currentImage={picsArray ? picsArray[currentImage]:""}
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
        className="w-1/2 vh-100 fixed top-0 right-0 flex flex-col justify-around bg-white p-3">
        
        <div className="flex w-full">
        <StatusSwitch
                currentStatus={jsonsArray ? jsonsArray[currentImage].status : "default"}
                currentImage={jsonsArray ? jsonsArray[currentImage].page_number: 0}
                JSON={JSON}
                setJSON={setJSON}
            />
        </div>
        

        
        <div className="flex w-full">
            <Dialogos
                numberOfDialogs={numberOfDialogs}
                currentDialog={currentDialog}
                setCurrentDialog={setCurrentDialog}
                JSON={JSON}
            />
            <Comentarios
                setTranslation={setTranslation}
                translation={translation}
                currentDialog={currentDialog}
                JSON={JSON}
            />
            <SuggestedTranslation
                setSuggestedTranslation={setSuggestedTranslation}
                suggestedTranslation={suggestedTranslation}
                currentDialog={currentDialog}
                JSON={JSON}
            />
        </div>
  
        

        <Toolkit
            dialogs={dialogs}
            selectedId={selectedId}
            setDialogs={setDialogs}
            blurreds={blurreds}
            setBlurreds={setBlurreds}
            translation={translation}
            suggestedTranslation={suggestedTranslation}
            setSuggestedTranslation={setSuggestedTranslation}
            
        />
        <Navigation
            setCurrentImage={setCurrentImage}
            currentImage={currentImage}
            saveImage={generateB64ImgFromId}
            shallowJSON={shallowJSON}
            images={picsArray}
            JSON={JSON}
            sendPictureAndJsonToStrapi={sendPictureAndJsonToStrapi}
            generateAndUploadImgToStrapi = {generateAndUploadImgToStrapi}
            pagesArray={pagesArray}
            setJSON={setJSON}
        />
        
    </section>
    </main>
	);
};
export default PagesList;
