//import { useEffect, useState, } from "react";

/*

function Galeria() {
   // let numero=0
    //const [numero,scrollear]= useState(1)
    const [url,arrayfotos] = useState([])
    const [{numero,scrolltop,distancia},scrollear] = useState({numero:0,scrolltop:0,distancia:500})
    
       useEffect( ()=>{
         fetch(`https://api.unsplash.com/photos/?page=${numero};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk`)
           .then(respuesta=>respuesta.json())
           .then(numero<=1?datos =>arrayfotos(datos):datos => arrayfotos(array => array.concat(datos)))
           
           },
        [numero])


        const cargarmas =()=>{
            
            if(scrolltop>distancia){
                scrollear({numero:numero+1,scrolltop,distancia:distancia+500})
                }
            else{
                scrollear({numero,scrolltop:document.documentElement.scrollTop,distancia})
            }
            
            console.log( 'scrolltop :'+ scrolltop)
            console.log ( 'numero: ' + numero)
            console.log('distancia: '+distancia)
        }
        window.addEventListener('scroll',cargarmas)

      
    
      
    return(
        <>
        <input id="palabra" type="text" />
        <button onClick={handleClick}>Buscar</button>
        {/* <button onClick={counter}>Apreta</button> *//* }
            {url.map((url,indice)=> <img key={indice} src={url.urls.small} alt="" /> )} 
        </>
    )
}
export {Galeria}*/