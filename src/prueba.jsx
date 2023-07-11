import { Card, Text, Flex,Image, Box, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


const Prueba = ({scrolltop,arraycompleto,arraycompletobuscador,verificador}) => {
    const[activado,setactivador]=useState(false)
    const [srczoom,setsrczoom]=useState('')
    const [iden,setiden]=useState(0)
    const [medida,setmedida]=useState(250)
   
    let src = arraycompleto
    src = verificador?src=arraycompleto : src=arraycompletobuscador
  
    
    const zoom=(event)=>{
        setactivador(true)
        setsrczoom(event.target.getAttribute('src'))
        console.log('event',event.target.clientWidth)
        setiden(event.target.getAttribute('id'))
        console.log('iden inicial= ',iden, 'tipo de dato= ', typeof iden)
        setmedida(event.target.clientWidth)
        console.log('medida', medida)
      
    }

    const cerrar =()=>{
        setactivador(false)
    }

    const atras=()=>{
       setiden(iden-1)
       console.log('iden-1 = ',iden)
    }

    const adelante=()=>{
        setiden(parseInt(iden)+1)
        console.log('iden+1 = ',iden)
    }
    useEffect(()=>{
        src.map((element)=>console.log(element))
        src.map((element,index)=>{index==iden?setsrczoom(element.urls.regular):console.log('ERROR')})
        console.log('paso por useeffect = ',iden)
    }, [iden])
  
 
  return(
        <>
       
        <Flex filter={activado?"blur(5px)":'auto'} alignContent={'space-around'} alignItems={'baseline'} wrap={'wrap'}>

        {src==undefined? <p>cargando...</p>:src.map((elemento,index) => (
          
                    <Image id={index} key={elemento.id} src={elemento.urls.small} alt="" />
                  
           
                 ))}
        </Flex> 
        {
        activado && 
            <Flex style={{ position: "absolute", top: `${scrolltop}px`, zIndex: 1,left: `50% `,transform: "translateX(-50%)"
             }} color={'white'} justifyContent={'space-between'} wrap={'wrap'}>
         <React.Fragment>
            <Flex   >
            <button onClick={atras}>atras</button>
            <Image h='100vh' justifyContent={'center'} src={srczoom} alt="" />
            <button onClick={adelante}>adelante</button>
            <button onClick={cerrar}>cerrar</button>
            </Flex>
        </React.Fragment>
  
        </Flex>
        }
        </>
    )
}

export { Prueba }