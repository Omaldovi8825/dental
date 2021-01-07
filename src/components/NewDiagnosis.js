import ReactDOM from 'react-dom'

import './styles/NewDiagnosis.css'

const NewDiagnosis = (props) => {

    let {isOpen, closeDiagnosisModal} = props

    if(!isOpen){
        return null
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <i onClick={closeDiagnosisModal} class="far fa-window-close"></i>
            <textarea className="diagnosis-area" />
            <button 
                className="new-diagnosis-button"
                type="button"
                onClick={closeDiagnosisModal}
            >
                Guardar
            </button>
        </div>, 
        document.getElementById('modal'))
}

export default NewDiagnosis