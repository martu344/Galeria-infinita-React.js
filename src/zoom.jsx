import React, { useEffect, useState } from 'react'
import { Text, Flex,Image, Box, Button,extendTheme } from '@chakra-ui/react'
import cruz from '/cruz.svg'
import left from '/left.svg'
import right from '/right.svg'
import up from '/up.svg'
import down from '/down.svg'
import { estilo } from '../style'
import '../stile.css'

const theme = extendTheme({
    styles: {
      global: {
        "::-webkit-scrollbar": {
          width: "1px",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "black.300",
          borderRadius: "none",
        },
      },
    },
  });


const Zoom = ({mini, verificador, texto,numero,cambio,setsrczoom,srczoom,setiden,iden,src,setactivador,activado,scrolltop})=>{
  
    const [descrp,setdescrp]=useState(false)
    
    const cerrar =()=>{
        setactivador(false)
        setdescrp(false)
    }

    const atras=()=>{
        iden>0?setiden(iden-1):null
      // console.log('iden-1 = ',iden)
    }

    const adelante=()=>{
        if(iden<(src.length-3))
        {
            setiden(parseInt(iden)+1)
        }else{
            setiden(parseInt(iden)+1)
            cambio({numero:(numero+1),texto})
        }
       
        }
  
       // console.log('iden+1 = ',iden)
    
    useEffect(()=>{
        const cargarimg = async()=>{
         await src.map((element,index)=>{index==iden?setsrczoom(element.urls.regular):null})}
         cargarimg()
        //console.log('paso por useeffect = ',iden)
    }, [iden])

    const description = ()=>{
        
        setdescrp(!descrp)
    }
 console.log('prueba',mini)
    return(
        <>
        <Flex sx={estilo.zoom} style={{ top:`${scrolltop}px`
             }}>
            <React.Fragment >
                <Flex   >
                    <Box display="flex" flexDirection="column"  h='100vh'>
                        <Button _hover={{}} bg='transparent' h='10vh'marginBottom="40vh"onClick={cerrar}><Image src={cruz}/></Button>
                        <Button _hover={{}} bg='transparent' onClick={atras}><Image src={left}/></Button>
                    </Box>
                    <Box className='barrascroll' overflow={mini?'scroll':'hidden'} overflowX={'hidden'} w={'87vw'} h={'100vh'}  position="relative">
                        <Image justifyContent={'center'} src={srczoom} alt="" />
                        <Button _hover={{}} display={descrp?'none':'block'} sx={estilo.boton} onClick={description}><Image src={up}/> </Button>
                        {descrp&&
                        <Box className={descrp ? 'classdescripcion2' :null} sx={estilo.descrp} >
                              
                            <Button _hover={{}} sx={estilo.boton2} onClick={description}> 
                                <Image src={down}/> 
                            </Button>
                            {src.map((elemento,index)=> iden==index?
                            <>
                            <Text  fontSize={['sm', 'md', 'lg']} >Descripcion: {elemento.description==null?elemento.alt_description:elemento.description}</Text>
                            {verificador?null:<Text>Tags: {elemento.tags[0].title}, {elemento.tags[1].title}, {elemento.tags[2].title}</Text>}
                            <Text  fontSize={['sm', 'md', 'lg']} >Ubicacion: {elemento.user.location==null? 'Sin especificar':elemento.user.location}</Text>
                            <Text  fontSize={['sm', 'md', 'lg']} >Likes: {elemento.likes==null? 'Sin especificar':elemento.likes}</Text>
                            <Text  fontSize={['sm', 'md', 'lg']} >By {elemento.user.name==null? 'Sin especificar':elemento.user.name}</Text>
                            <Text fontSize={['sm', 'md', 'lg']} >Fecha: {elemento.created_at==null?'Sin especificar':elemento.created_at}</Text>
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