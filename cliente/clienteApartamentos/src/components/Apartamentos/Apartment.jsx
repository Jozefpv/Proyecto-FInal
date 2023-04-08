
const Apartment = (props) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '400px', backgroundColor:'white', borderRadius:'10px' }}>
            <img style={{ width: '400px',borderRadius:'10px', height:"300px" }} src={props.foto}></img>
            <div style={{padding: '10px'}}>
                <h5>{props.info.nombre}</h5>
                <p style={{color:'#6b6b6b'}}>{props.info.direccion}</p>
            </div>
        </div>
    )
}

export default Apartment