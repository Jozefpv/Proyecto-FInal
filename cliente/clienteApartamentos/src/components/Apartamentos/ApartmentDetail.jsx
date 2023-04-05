import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


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
                    <img src="https://cdn2.hometogo.net/small/v1/d28/96a/61235ace08837962ef8467eee0.jpg"></img>
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