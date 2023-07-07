import { useState } from "react"
import { Componente1 } from "./componentes/galeria/galeria"


const App = () => {

const [valor,cambio] = useState("false")
    return(
        <>
        <Componente1 valor={valor} cambio={cambio}/>
        </>
    )
}

export { App }