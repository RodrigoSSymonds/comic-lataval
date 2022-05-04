import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';

export default async function generateB64ImgFromId(id = 'canvasCont',download = false ) {
	const imageToSave = document.getElementById(id);
	const pageNum = document.getElementById('pageNum').innerHTML;
	const h = document.getElementById("canvasContImg").naturalHeight;
	const w = document.getElementById("canvasContImg").naturalWidth;

	return await domtoimage.toJpeg(imageToSave, { quality: 1 ,width: w, height : h}).then(dataUrl => {
		if (download) {
			var link = document.createElement('a');
			link.download = pageNum + '.jpg';
			link.href = dataUrl;
			link.click();
		}
		return dataUrl;
	});
	
		// return await html2canvas(imageToSave).then(function (canvas) {
		//   /* document.body.appendChild(canvas); */
		//   const dataURL = canvas.toDataURL("image/jpg");
		//   const image = document.createElement("img");
		//   image.src = dataURL;
		//   image.width = w;
		//   image.zIndex = "9999999";
		//   image.height = h; 
		//   /*  document.body.appendChild(image); */
		//   var a = document.createElement("a");
		//   a.href = dataURL;
		//   a.setAttribute("download", pageNum+'.jpg');
		//   a.click();
		// });


	  }
