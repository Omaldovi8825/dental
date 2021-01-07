import {Fragment} from 'react'

import IpsumLorem from './Ipsum'

import './styles/Diagnosis.css'

const Diagnosis = (props) => {

    const {fecha, isOpen, openModal, closeModal} = props

    return(
        <Fragment>
            <button 
                className="diagnosis-button" 
                type="button"
                onClick={openModal}>
                    Fecha: {fecha}
            </button>
            <IpsumLorem 
                isOpen={isOpen}
                closeModal={closeModal}
            />
        </Fragment>
    )
}

export default Diagnosis