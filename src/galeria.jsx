import React, { useEffect, useState } from 'react'
import { Text,Image, Box} from '@chakra-ui/react'
import { estilo } from '../style'
import heart from '/heart-solid.svg'
import '../stile.css'
import { Zoom } from './zoom'

const Galeria = ({texto,numero,cambio,setactivador,activado,scrolltop,url,urlbuscador,verificador}) => {

    let src = url
    src = verificador?src=url : src=urlbuscador

    const [srczoom,setsrczoom]=useState('')
    const [iden,setiden]=useState(0)

    const zoom=(event)=>{
        setactivador(true)
        setsrczoom(event.target.getAttribute('src'))
        setiden(event.target.getAttribute('id'))
    }
    
    return (
      <>
          {src == undefined ? 
            <p>NOT FOUND!!</p>
           : 
                <Box overflow={'hidden'} filter={activado?"blur(5px)":'auto'} className='row'>
                    <div className='col'> 
                        {src.map((elemento,index)=> index%3==0
                            ?
                            <>
                                <Box position="relative">
                                    <Image marginTop='5' marginBottom='5'key={elemento.id} id={index} onClick={zoom}  src={elemento.urls.small}/> 
                                    <Text sx={estilo.text}>
                                    By {elemento.user.name}
                                    </Text>
                                    <Text sx={estilo.text2}>
                                        <img src={heart} alt="" /> 
                                        {elemento.likes}
                                    </Text>
                                </Box>
                            </>
                            :null)
                        } 
                    </div>    
                    <div className='col'> 
                        {src.map((elemento,index)=> index%2==0&&index%3!=0
                            ?
                            <>
                                <Box position="relative" >
                                    <Image marginTop='5' marginBottom='5'key={elemento.id}id={index}onClick={zoom}  src={elemento.urls.small}/> 
                                    <Text sx={estilo.text}>
                                        By {elemento.user.name}
                                    </Text>
                                    <Text sx={estilo.text2}>{/*sacar este texto cuando para el cel */}
                                    <img src={heart} alt="" />  
                                    {elemento.likes}
                                    </Text>
                                </Box>
                            </>
                            :null)} 
                    </div>    
                    <div className='col'> 
                        {src.map((elemento,index)=> index%1==0&&index%2!=0&&index%3!=0
                           ?
                           <>
                                <Box position="relative" >
                                    <Image marginTop='5' marginBottom='5' key={elemento.id} id={index}onClick={zoom}  src={elemento.urls.small}/> 
                                    <Text sx={estilo.text}>
                                    By {elemento.user.name}
                                    </Text>
                                    <Text sx={estilo.text2}>
                                    <img src={heart} alt="" /> 
                                    {elemento.likes}
                                    </Text>
                                </Box>
                            </>
                            :null)} 
                    </div>  
                </Box> 
           
          }
            
        {
          activado &&  <Zoom texto={texto} numero={numero} cambio={cambio}  setsrczoom={setsrczoom} srczoom={srczoom} setiden={setiden} iden={iden} src={src} setactivador={setactivador} activado={activado} scrolltop={scrolltop}/>
        }
        </>
    )
}

export { Galeria }