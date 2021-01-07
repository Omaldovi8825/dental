import ReactDOM from 'react-dom'

import './styles/Modal.css'

const Modal = (props) => {

    let {closeModal, children, isOpen} = props

    if(!isOpen){
        return null
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <i onClick={closeModal} className="far fa-window-close"></i>
            {children}
        </div>, 
        document.getElementById('modal'))
}

export default Modal