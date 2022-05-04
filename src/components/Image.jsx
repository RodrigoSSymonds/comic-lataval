
//import de imagenes

//import de componentes
import {ImageSt} from '../styles/Image.js';

//estilos
//Elaboro: www.github.com/includeovalle
//Fecha:14/12/2021

const Image = (props)=>{
  return(
    <>
    <ImageSt
    className={props.className}
    src={props.src}
    onDrop={props.onDrop}
    onDragOver={props.onDragOver}
    alt = {props.alt}
    width = {props.width}
    height= {props.height}
    />
    </>
  )
}
export default Image;

