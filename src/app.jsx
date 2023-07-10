
import { useEffect, useState } from 'react'
import './App.css'
import { Prueba } from './prueba'
import { Button, Input } from '@chakra-ui/react'

let verificador=true


 function App() {
  const [altura,setaltura]=useState(100)
  const [{url,urlbuscador},arrayfotos]=useState({url:[],urlbuscador:[]})
  const[{numero,texto},cambio]=useState({numero:1,texto:""})
  const [inputValue, setInputValue] = useState('');
  window.addEventListener('scroll', scrollInfinito);

 
 function scrollInfinito() { 
   let scrolltop = document.documentElement.scrollTop
   scrolltop>=altura?cambio({numero:(numero+1),texto}):console.log("altura= ",altura, "scrolltop= ",scrolltop,"numero= ", numero) 
   
}

  const buscador =()=>{
    verificador=false
   setaltura(0)
    console.log("paso por buscador y la altura es= "+altura)
    cambio({numero:1,texto:inputValue})
    }
   
 async function llamado(){
  await fetch(`https://api.unsplash.com/photos/?page=${numero};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk`)
    .then(respuesta=>respuesta.json())
       .then(numero<=1?datos =>arrayfotos({url:datos}):datos => arrayfotos({url:url.concat(datos),urlbuscador}))
       console.log("paso++")
  }
  async function buscando(){
   await fetch(`https://api.unsplash.com/search/photos/?page=${numero};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk&query=${texto}`)
    .then(respuesta=>respuesta.json())
       .then(numero<=1?datos =>arrayfotos({urlbuscador:datos.results}):datos => arrayfotos({url,urlbuscador:urlbuscador.concat(datos.results)}))   
       console.log("paso")
  }


 useEffect(()=>{
  
    if(verificador){
          llamado()
          console.log("llega al llamado")
         setaltura(altura+100)
       }
       else{ 
       buscando()
       console.log("paso por buscando y verificador es= "+verificador)
       setaltura(altura+100)
       //cambio({numero:1,texto})
       }}, [numero,texto])

  
  return (
    <>
    <header>
      <Input  value={inputValue}
        onChange={(event) => setInputValue(event.target.value)} variant={'filled'} marginBottom={30}  focusBorderColor='red' width={400} borderRadius={5}  height={30}paddingLeft={5}placeholder={'Buscar imagen'} type="text" />
      <Button onClick={buscador}>Buscar</Button>
    </header>
   <Prueba arraycompleto={url} arraycompletobuscador={urlbuscador} verificador={verificador} />
    </>
  )
}

export default App