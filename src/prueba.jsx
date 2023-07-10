import { Card, Text, Flex,Image, Box, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


const Prueba = ({arraycompleto,arraycompletobuscador,verificador}) => {
    const [{activador,srczoom},setactivador]=useState({activador:true,srczoom:' '})
    const [iden,setiden]=useState(0)
    let src = arraycompleto
    src = verificador?src=arraycompleto : src=arraycompletobuscador

    const zoom=(event)=>{
        setactivador({activador:false,srczoom:event.target.getAttribute('src')})
        console.log('el iden que tendria que ser segun la imagen seleccionada',event.target.getAttribute('id'))
        setiden(event.target.getAttribute('id'))
        console.log('iden inicial= ',iden)
    }

    const atras=()=>{
       setiden(iden-1)
       console.log('iden-1 = ',iden)
    }
    const adelante=()=>{
        setiden(iden+1)
        console.log('iden+1 = ',iden)
    }
    useEffect(()=>{
        src.map((element,index)=>{index==iden?setactivador({activador,srczoom:element.urls.small}):console.log('ERROR')})
        console.log('paso por useeffect = ',iden)
    }, [iden])
    
 
  return(
        <>
        {activador?
        <Flex justifyContent={'space-between'} wrap={'wrap'}>

        {src==undefined? <p>cargando...</p>:src.map((elemento,index) => (
            <React.Fragment key={index} >

                <Card onClick={zoom} padding={2}  justifyContent={'center'}  bg={'#303030'} size={'sm'} width={300} color={'white'} overflow={'hidden'} fontSize={'smaller'} textAlign={'center'} marginBottom={20}>

                    <Image id={index} key={elemento.id} src={elemento.urls.small} alt="" />
                    <Text>{elemento.alt_description==null?'Sin especificar':elemento.alt_description}</Text>
                    <Text >Ubicacion: {elemento.user.location==null? 'Sin especificar':elemento.user.location}</Text>
                    <Text>Like: {elemento.likes==null?'Sin especificar':elemento.likes}</Text>  
                    <Text>Fecha: {elemento.created_at==null?'Sin especificar':elemento.created_at}</Text>
                </Card>
            </React.Fragment>
                 ))}
        </Flex>:  <Flex color={'white'}justifyContent={'space-between'} wrap={'wrap'}>
         <React.Fragment >
            <button onClick={atras}>atras</button>
            <Image src={srczoom} alt="" />
            <button onClick={adelante}>adelante</button>
        </React.Fragment>
        </Flex>
        }
        </>
    )
}

export { Prueba }