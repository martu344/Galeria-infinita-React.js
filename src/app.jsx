
import { useEffect, useState } from 'react'
import React from 'react'
import { Galeria } from './galeria'
import { Button, Input,Flex ,InputGroup, InputRightElement, Img} from '@chakra-ui/react'
import { estilo } from '../style'
import search from '/search.svg'

let verificador=true


 function App({activado,setactivador}) {
  const [altura,setaltura]=useState(100)
  const [{url,urlbuscador},arrayfotos]=useState({url:[],urlbuscador:[]})
  const[{numero,texto},cambio]=useState({numero:1,texto:''})
  const [scrolltop,setscrolltop]=useState(0)
  window.addEventListener('scroll', scrollInfinito);

 
 function scrollInfinito() { 
   setscrolltop(document.documentElement.scrollTop)
   scrolltop>=altura?cambio({numero:(numero+1),texto}):null
}

  const buscador =(event)=>{
    verificador=false
    setaltura(0)
    cambio({numero:1,texto:event.target.value})
    event.target.value==''?verificador=true:null
    
    }

 useEffect(()=>{
        
         if(verificador){  
              async function llamado(){
              await fetch(`https://api.unsplash.com/photos/?page=${numero};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk`)
              .then(respuesta=>respuesta.json())
              .then(numero<=1?datos =>arrayfotos({url:datos}):datos => arrayfotos({url:url.concat(datos),urlbuscador}))
                  // console.log("paso++", url)
              }
              llamado()
              setaltura(altura+100)
          }
          else{ 
                async function buscando(){
                await fetch(`https://api.unsplash.com/search/photos/?page=${numero};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk&query=${texto}`)
                .then(respuesta=>respuesta.json())
                .then(numero<=1?datos =>arrayfotos({urlbuscador:datos.results}):datos => arrayfotos({url,urlbuscador:urlbuscador.concat(datos.results)}))   
                }
                buscando()
                setaltura(altura+100)
              }
   
          
 
        }, [numero,texto])
   
 
  
  return (
    <>
   
      <Flex justifyContent={'center'}>
        <InputGroup  sx={estilo.input} >
          <Input value={texto} onChange={buscador}  type="text" placeholder="Buscar imagen" />
          <InputRightElement width="auto">
            <Button bg='transparent' _hover={{}} variant="solid"><Img src={search}/></Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
   
   <Galeria texto={texto} numero={numero} cambio={cambio} setactivador={setactivador} activado={activado} scrolltop={scrolltop} url={url} urlbuscador={urlbuscador} verificador={verificador} />
 
    </>
  )
}

export default App