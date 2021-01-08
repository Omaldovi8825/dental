import './styles/AltaCard.css'

const AltaCard = (props) => {
    let formValues = props.formValues

    return(
        <div className="card-container">
            <div className="card-user">
                <img src={formValues.foto || 'https://i.ibb.co/vmq8213/denti-foto.png'} alt="foto paciente"/>
                <div>
                    <p>Folio: {formValues.folio || '000000'}</p>
                    <h1>{formValues.nombre || 'Nombre'}
                    <br/>{formValues.apellido1 || 'Apellido1'} 
                    <br/>{formValues.apellido2 || 'Apellido2'}</h1>
                </div>
            </div>
            <div className="card-data">
                <p>Fecha de ingreso: <span>{formValues.fechaAlta}</span></p>
                <p>Teléfono fijo: <span>{formValues.telefono}</span></p>
                <p>Teléfono celular: <span>{formValues.celular}</span></p>
                <p>Lugar de nacimiento: <span>{formValues.lugarNac}</span></p>
                <p>Fecha de nacimiento: <span>{formValues.fechaNaci}</span></p>
                <p>Estado civil: <span>{formValues.civil}</span></p>
            </div>
        </div>
    )
}

export default AltaCard