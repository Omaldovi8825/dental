import './styles/AltaCard.css'

const AltaCard = (props) => {
    let formValues = props.formValues

    return(
        <div className="card-container">
            <div className="card-container-user">
                <img src={formValues.foto || 'https://i.ibb.co/7RD1QXT/user.jpg'} alt="foto paciente"/>
                <h1>{formValues.nombre || 'Nombre'}
                <br/>{formValues.apellido1 || 'Apellido1'} 
                <br/>{formValues.apellido2 || 'Apellido2'}</h1>
            </div>
            <p>Folio: <span>{formValues.folio || '000000'}</span></p>
            <p>Fecha de ingreso: <span>{formValues.fechaAlta || '2020-12-31'}</span></p>
            <p>Teléfono fijo: <span>{formValues.telefono || '7221223344'}</span></p>
            <p>Telefono celular: <span>{formValues.celular || '7221223344'}</span></p>
            <p>Lugar de nacimiento <span>{formValues.lugarNac || 'Toluca, México'}</span></p>
            <p>Fecha de nacimmineto <span>{formValues.fechaNaci || '2020-12-31'}</span></p>
            <p>Estado civil: <span>{formValues.civil || 'solter@'}</span></p>
        </div>
    )
}

export default AltaCard