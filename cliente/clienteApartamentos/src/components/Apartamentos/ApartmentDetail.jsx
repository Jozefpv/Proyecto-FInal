import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import imagenes from "./imagenes"


const ApartmentDetail = () => {
    const [informacion, setInformacion] = useState()
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3003/apartamentos/${id}`)
            .then(res => res.json())
            .then(data => setInformacion(data))
    }, [])

    return (
        <div style={{padding:'3%'}}>
            {informacion && (
                <div style={{display:'flex', gap:'15px'}}>
                    <img src={imagenes[id]}></img>
                    <div>
                        <h3>{informacion.nombre}</h3>
                        <p>Dirección: {informacion.direccion}</p>
                        <p>Precio noche: {informacion.precio_noche}€</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ApartmentDetail