
import { useEffect, useState } from 'react'
import React from 'react'
import { Galeria } from './galeria'
import { Button, Input,Flex } from '@chakra-ui/react'


let verificador=true


 function App({activado,setactivador}) {
  const [altura,setaltura]=useState(100)
  const [{url,urlbuscador},arrayfotos]=useState({url:[],urlbuscador:[]})
  const[{numero,texto},cambio]=useState({numero:1,texto:""})
  const [inputValue, setInputValue] = useState('');
  const [scrolltop,setscrolltop]=useState(0)
  window.addEventListener('scroll', scrollInfinito);

 
 function scrollInfinito() { 
   setscrolltop(document.documentElement.scrollTop)
   scrolltop>=altura?cambio({numero:(numero+1),texto}):null
   //console.log("altura= ",altura, "scrolltop= ",scrolltop,"numero= ", numero) 
   
}

  const buscador =()=>{
    verificador=false
    setaltura(0)
    //console.log("paso por buscador y la altura es= "+altura)
    cambio({numero:1,texto:inputValue})
    }

 useEffect(()=>{
  
    if(verificador){
           async function llamado(){
            await fetch(`https://api.unsplash.com/photos/?page=${numero};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk`)
            .then(respuesta=>respuesta.json())
            .then(numero<=1?datos =>arrayfotos({url:datos}):datos => arrayfotos({url:url.concat(datos),urlbuscador}))
                 console.log("paso++", url)
            }
        llamado()
        setaltura(altura+100)
       }
       else{ 
       
          async function buscando(){
            await fetch(`https://api.unsplash.com/search/photos/?page=${numero};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk&query=${texto}`)
            .then(respuesta=>respuesta.json())
            .then(numero<=1?datos =>arrayfotos({urlbuscador:datos.results}):datos => arrayfotos({url,urlbuscador:urlbuscador.concat(datos.results)}))   
              // console.log("paso")
          }
        buscando()
        setaltura(altura+100)
       }}, [numero,texto])

  
  return (
    <>
    
   <Flex justifyContent={'center'}>
      <Input margin = {15} color={'white'} value={inputValue}
        onChange={(event) => setInputValue(event.target.value)} variant={'filled'} marginBottom={30}  width={400} borderRadius={5}  height={30}paddingLeft={5}placeholder={'Buscar imagen'} type="text" />
      <Button onClick={buscador}>Buscar</Button>
   </Flex>
   <Galeria setactivador={setactivador} activado={activado} scrolltop={scrolltop} url={url} urlbuscador={urlbuscador} verificador={verificador} />
 
    </>
  )
}

export default App