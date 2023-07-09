import { Card, Text, Flex,Image, Box, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'

const Prueba = ({arraycompleto,arraycompletobuscador,verificador}) => {
    let src = arraycompleto
    src = verificador?src=arraycompleto : src=arraycompletobuscador

    //console.log('llego al render',src)
 
  return(
        <>
        <Flex justifyContent={'space-between'} wrap={'wrap'}>

        {src==undefined? <p>cargando...</p>:src.map((elemento,index) => (
            <React.Fragment key={index} >

                <Card padding={10}  justifyContent={'center'}  borderColor={'black'} border={'solid'} size={'sm'} width={200} color={'white'} overflow={'hidden'} fontSize={'smaller'} textAlign={'left'} marginBottom={20}>

                    <Image key={elemento.id} src={elemento.urls.small} alt="" />
                    <Text>{elemento.alt_description==null?'Sin especificar':elemento.alt_description}</Text>
                    <Text >Ubicacion: {elemento.user.location==null? 'Sin especificar':elemento.user.location}</Text>
                    <Text>Like: {elemento.likes==null?'Sin especificar':elemento.likes}</Text>  
                    <Text>Fecha: {elemento.created_at==null?'Sin especificar':elemento.created_at}</Text>
                </Card>
            </React.Fragment>
                 ))}
        </Flex>

        </>
    )
}

export { Prueba }