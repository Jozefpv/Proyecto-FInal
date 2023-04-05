const Apartment = (props) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '400px', backgroundColor:'white', borderRadius:'10px' }}>
            <img style={{ width: '400px',borderRadius:'10px' }} src="https://cdn2.hometogo.net/small/v1/d28/96a/61235ace08837962ef8467eee0.jpg"></img>
            <div style={{padding: '10px'}}>
                <h5>{props.info.nombre}</h5>
                <p style={{color:'#6b6b6b'}}>{props.info.direccion}</p>
            </div>
        </div>
    )
}

export default Apartment