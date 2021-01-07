import {Component} from 'react'

import HistorialHeader from '../components/HistorialHeader'
import Diagnosis from '../components/Diagnosis'
import NewDiagnosis from '../components/NewDiagnosis'

import './styles/ClientDetails.css'
import db from '../server/db.json'
import { Link } from 'react-router-dom'

class ClientDetails extends Component {
   
    state = {
        clientData: db[this.props.match.params.clientId - 1],
        modalOpen: false,
        newDiagnosis: false
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    openNewDiagnosis = e => {
        this.setState({
            newDiagnosis: true
        })
    }

    handleCloseDiagnosisModal = e => {
        this.setState({
            newDiagnosis: false
        })
    }

    render(){
        let {
            nombre, 
            apellido1, 
            apellido2,
            folio,
            telefono,
            celular,
            fechaIngreso,
            fechaNac,
            lugarNac,
            civil 
        } = this.state.clientData

        let {modalOpen} = this.state
        let paciente = this.props.match.params.clientId

        return(
            <div>
                <HistorialHeader />
                <div className="historial-area">
                    <div className="historial-area-buttons">
                        <Link to={`/paciente/${paciente}/edit`}>
                            <img src="https://i.ibb.co/mTZV5pL/denti-diagnostico.png" alt="nuevo diagnostico"/>
                        </Link>
                        <button 
                            type="button"
                            onClick={this.openNewDiagnosis}>
                            <img src="https://i.ibb.co/RQpnSjK/denti-agenda.png" alt="nueva nota"/>
                        </button>
                        <NewDiagnosis 
                            isOpen={this.state.newDiagnosis}
                            closeDiagnosisModal={this.handleCloseDiagnosisModal}
                        />
                    </div>
                    <div className="historial-data-container">
                        <div className="historial-data-container-up">
                            <div className="historial-id-data">
                                <p>Folio: {folio}</p>
                                <h1>{nombre} 
                                <br/>{apellido1}
                                <br/>{apellido2}
                                </h1>
                            </div>
                            <div className="historial-user-data">
                                <p>Telefono fijo: {telefono}</p>
                                <p>Celular: {celular}</p>
                                <p>Fecha de ingreso: {fechaIngreso}</p>
                                <p>Fecha de nacimiento: {fechaNac}</p>
                                <p>Lugar de nacimiento: {lugarNac}</p>
                                <p>Estado civil: {civil}</p>
                            </div>
                        </div>
                        <div className="historial-data-container-down">
                        <Diagnosis 
                            fecha="12/10/2019" 
                            isOpen={modalOpen} 
                            openModal={this.openModal}
                            closeModal={this.closeModal}    
                        />
                        <Diagnosis fecha="13/09/2018" />
                        <Diagnosis fecha="15/04/2018" />
                        <Diagnosis fecha="23/07/2016" />
                        <Diagnosis fecha="15/03/2012" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientDetails