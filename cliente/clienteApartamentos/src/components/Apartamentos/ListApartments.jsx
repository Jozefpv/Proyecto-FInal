import { useEffect, useState } from "react"
import Apartment from "./Apartment"
import { Link } from "react-router-dom"
import './styleListApartments.css'

const ListApartments = () => {

    const [apartment, setApartment] = useState([])

    useEffect(() => {

        fetch('http://localhost:3003/')
            .then(res => res.json())
            .then(data => {
                return setApartment(data)
            })

    }, [])

    return (
        <>
            <div style={{ backgroundColor: '#f4fafc', height: '100vh', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', padding: '15px', justifyContent:'center' }}>
                {apartment.map((item) => <div className="listApartmentText"><Link to={`/apartamentos/${item._id}`} style={{ textDecoration: 'none', cursor: 'pointer', color: 'black', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}><Apartment info={item} /></Link></div>)}
            </div >
        </>
    )
}

export default ListApartments