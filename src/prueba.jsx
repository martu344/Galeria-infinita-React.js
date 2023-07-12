import { Card, Text, Flex,Image, Box, Button, CardHeader, CardBody, CardFooter, Img } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { estilo } from '../style'
import heart from '../public/heart-solid.svg'
import cruz from '../public/cruz.svg'
import left from '../public/left.svg'
import right from '../public/right.svg'
import '../stile.css'

const Prueba = ({scrolltop,url,urlbuscador,verificador}) => {

    const[activado,setactivador]=useState(false)
    const [srczoom,setsrczoom]=useState('')
    const [iden,setiden]=useState(0)
    const [descrp,setdescrp]=useState(false)
   
   
    let src = url
    src = verificador?src=url : src=urlbuscador
  
    
    const zoom=(event)=>{
        setactivador(true)
        setsrczoom(event.target.getAttribute('src'))
        setiden(event.target.getAttribute('id'))
    }

    const cerrar =()=>{
        setactivador(false)
        setdescrp(false)
    }

    const atras=()=>{
       setiden(iden-1)
      // console.log('iden-1 = ',iden)
    }

    const adelante=()=>{
        setiden(parseInt(iden)+1)
       // console.log('iden+1 = ',iden)
    }
    useEffect(()=>{
        src.map((element,index)=>{index==iden?setsrczoom(element.urls.regular):null})
        //console.log('paso por useeffect = ',iden)
    }, [iden])
    
    
    const description = ()=>{
        
        setdescrp(!descrp)
    }
    return (
      <>
        
          {src == undefined ? 
            <p>NOT FOUND!!</p>
           : 
                <Box filter={activado?"blur(5px)":'auto'} className='row'>
                    <div className='col'> 
                        {src.map((elemento,index)=> index%3==0
                            ?
                            <>
                                <Box position="relative" key={index}>
                                    <Image marginTop='5' marginBottom='5' id={index}onClick={zoom}  src={elemento.urls.small}/> 
                                    <Text sx={estilo.text}>
                                    By {elemento.user.name}
                                    </Text>
                                    <Text sx={estilo.text2}>
                                        <img src={heart} alt="" /> {elemento.likes}
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
                                <Box position="relative" key={index}>
                                    <Image marginTop='5' marginBottom='5' id={index}onClick={zoom}  src={elemento.urls.small}/> 
                                    <Text sx={estilo.text}>
                                        By {elemento.user.name}
                                    </Text>
                                    <Text sx={estilo.text2}>
                                    <img src={heart} alt="" />  {elemento.likes}
                                    </Text>
                                </Box>
                            </>
                            :null)} 
                    </div>    
                    <div className='col'> 
                        {src.map((elemento,index)=> index%1==0&&index%2!=0&&index%3!=0
                           ?
                           <>
                                <Box position="relative" key={index}>
                                    <Image marginTop='5' marginBottom='5' id={index}onClick={zoom}  src={elemento.urls.small}/> 
                                    <Text sx={estilo.text}>
                                    By {elemento.user.name}
                                    </Text>
                                    <Text sx={estilo.text2}>
                                    <img src={heart} alt="" />  {elemento.likes}
                                    </Text>
                                </Box>
                            </>
                            :null)} 
                    </div>  
                </Box> 
           
          }
            
        {
        activado && 
        <Flex sx={estilo.zoom} style={{ top: `${scrolltop}px`
             }}>
            <React.Fragment>
                <Flex   >
                    <Box display="flex" flexDirection="column"  h='100vh'>
                        <Button _hover={{}} bg='transparent' h='10vh'marginBottom="40vh"onClick={cerrar}><Image src={cruz}/></Button>
                        <Button _hover={{}} bg='transparent' onClick={atras}><Image src={left}/></Button>
                    </Box>
                    <Box position="relative">
                        <Image h='100vh' justifyContent={'center'} src={srczoom} alt="" />

                        <Button className={descrp ? 'classdescripcion' :null} sx={estilo.boton} onClick={description}> apreta</Button>

                        {descrp&&<Box className={descrp ? 'classdescripcion2' :null} sx={estilo.descrp} >
                            {src.map((elemento,index)=> iden==index?
                            <>
                            <Text>{elemento.alt_description==null?'Sin especificar':elemento.alt_description}</Text>
                            <Text >Ubicacion: {elemento.user.location==null? 'Sin especificar':elemento.user.location}</Text>
                            <Text>Fecha: {elemento.created_at==null?'Sin especificar':elemento.created_at}</Text>
                            </>:null
                            )}</Box>}
                    </Box>
                    <Button _hover={{}} bg='transparent' marginTop='50vh' onClick={adelante}><Image src={right}/></Button>
                </Flex>
            </React.Fragment>
  
        </Flex>
        }
        </>
    )
}

export { Prueba }