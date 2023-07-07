//import { useEffect, useState } from "react"


function Buscador() {
 console.log("funciona")
 
/*    const[texto,Buscarimagen]=useState("")
    const [url,arrayfotos] = useState([])
    const [{numerobuscador,scrolltopbuscador,distanciabuscador},scrollear] = useState({numerobuscador:0,scrolltopbuscador:0,distanciabuscador:500})

    Buscarimagen("car")

     useEffect(()=>{
         fetch(`https://api.unsplash.com/search/photos/?page=${numerobuscador};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk&query=${texto}`)
         .then(respuesta=>respuesta.json())
            .then(numerobuscador<=1?datos =>arrayfotos(datos):datos => arrayfotos(arraybuscador => arraybuscador.concat(datos)))
           
            },
         [numerobuscador,texto])

    if(buscando == true){
        const cargarmasbuscador=()=>{
            
            if(scrolltopbuscador>distanciabuscador){
                scrollear({numerobuscador:numerobuscador+1,scrolltopbuscador,distanciabuscador:distanciabuscador+500})
                }
            else{
                scrollear({numerobuscador,scrolltopbuscador:document.documentElement.scrollTop,distanciabuscador})
            }
            
            console.log( 'scrolltop :'+ scrolltopbuscador)
            console.log ( 'numero: ' + numerobuscador)
            console.log('distancia: '+distanciabuscador)
        }
        window.addEventListener('scroll',cargarmasbuscador)
        
    }*/
    return(
        <>

        <p>Si funciona!!</p>
         {/* <button onClick={counter}>Apreta</button> */}
         {/*url.map((url,indice)=> <img key={indice} src={url.urls.small} alt="" /> )*/} 
        </>
    )
}
export {Buscador}