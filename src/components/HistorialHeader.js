import Logo from './Logo'

import './styles/HistorialHeader.css'

const HistorialHeader = () => {
    return(
        <div className="historial-header">
            <h1>Historial Clínico</h1>
            <Logo className="historial-header-logo"/>
        </div>
    )
}

export default HistorialHeader