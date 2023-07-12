import { Card, Text, Flex,Image, Box, CardHeader, CardBody, CardFooter, Img } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'



const Prueba = ({scrolltop,arraycompleto,arraycompletobuscador,verificador}) => {

    const[activado,setactivador]=useState(false)
    const [srczoom,setsrczoom]=useState('')
    const [iden,setiden]=useState(0)
   
   
    let src = arraycompleto
    src = verificador?src=arraycompleto : src=arraycompletobuscador
  
    
    const zoom=(event)=>{
        setactivador(true)
        setsrczoom(event.target.getAttribute('src'))
        setiden(event.target.getAttribute('id'))
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
        src.map((element,index)=>{index==iden?setsrczoom(element.urls.regular):console.log('ERROR')})
        console.log('paso por useeffect = ',iden)
    }, [iden])
    
    return (
      <>
        
          {src == undefined ? 
            <p>cargando...</p>
           : 
                <div className='row'>
                    <div className='col'> {src.map((elemento,index)=> index%3==0?<Image marginTop='5' marginBottom='5' id={index}onClick={zoom} key={index} src={elemento.urls.small}/>:null)} 
                    </div>    
                    <div className='col'> {src.map((elemento,index)=> index%2==0&&index%3!=0?<Image marginTop='5' marginBottom='5' id={index}onClick={zoom} key={index} src={elemento.urls.small}/>:null)} </div>    
                    <div className='col'> {src.map((elemento,index)=> index%1==0&&index%2!=0&&index%3!=0?<Image marginTop='5' marginBottom='5' id={index}onClick={zoom} key={index} src={elemento.urls.small}/>:null)} </div>  
                </div> 
           
          }
            
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