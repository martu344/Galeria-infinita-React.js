import React, { useEffect, useState } from 'react'
import { Text, Flex,Image, Box, Button } from '@chakra-ui/react'
import cruz from '/cruz.svg'
import left from '/left.svg'
import right from '/right.svg'
import up from '/up.svg'
import down from '/down.svg'
import { estilo } from '../style'
import '../stile.css'


const Zoom = ({setsrczoom,srczoom,iden,src,setactivador,activado,scrolltop})=>{
  
    const [descrp,setdescrp]=useState(false)
    
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

    return(
        <>
        <Flex overflow={activado?"hidden":'auto'}  sx={estilo.zoom} style={{ top: `${scrolltop}px`
             }}>
            <React.Fragment >
                <Flex   >
                    <Box display="flex" flexDirection="column"  h='100vh'>
                        <Button _hover={{}} bg='transparent' h='10vh'marginBottom="40vh"onClick={cerrar}><Image src={cruz}/></Button>
                        <Button _hover={{}} bg='transparent' onClick={atras}><Image src={left}/></Button>
                    </Box>
                    <Box overflow={'scroll'} h={'100vh'}  position="relative">
                        <Image justifyContent={'center'} src={srczoom} alt="" />

                        <Button _hover={{}}  sx={estilo.boton} onClick={description}><Image src={up}/> </Button>

                        {descrp&&
                        <Box style={{ top: `${scrolltop}px`}} className={descrp ? 'classdescripcion2' :null} sx={estilo.descrp} >
                            <Button _hover={{}} sx={estilo.boton2} onClick={description}> <Image src={down}/> </Button>
                            {src.map((elemento,index)=> iden==index?
                            <>
                            <Text >Desc: {elemento.alt_description==null?'Sin especificar':elemento.alt_description}</Text>
                            <Text >Ubi: {elemento.user.location==null? 'Sin especificar':elemento.user.location}</Text>
                            <Text>Fecha: {elemento.created_at==null?'Sin especificar':elemento.created_at}</Text>
                            </>:null
                            )}
                        </Box>
                        }
                    </Box>
                    <Button _hover={{}} bg='transparent' marginTop='50vh' onClick={adelante}><Image src={right}/></Button>
                </Flex>
            </React.Fragment>
  
        </Flex>
        
        
        </>
    )
}

export {Zoom}