import {Link} from 'react-router-dom'

import './styles/SearchCard.css'

const SearchCard = (props) => {
    let {folio, foto, nombre, apellido1, apellido2} = props.clientInfo

    return(
        <Link to={`/client/${folio}`} className="user-link">
            <div className="search-card-container">
                <div className="card-container-up">
                    <p>Folio: {folio}</p>
                    <img src={foto} alt="user foto" />    
                </div>
                <div className="card-container-down">
                    <p>{nombre} {apellido1} {apellido2}</p>
                </div>
            </div>
        </Link>
    )
}

export default SearchCard