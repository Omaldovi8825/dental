import {Link} from 'react-router-dom'
import './styles/Menu.css'

const Icon = () => {
    return(
        <i className="fas fa-search"></i>
    ) 
}

const BotonInicio = (props) => {
    return(
        <Link 
            to={props.route} 
            className="MenuInicio__boton">
                {props.name}
        </Link>
    )
}

const Menu = (props) => {
        return(
            <div className="MenuInicio">
                <div className="MenuInicio__innerSquare">
                    <BotonInicio name="Alta" route="/alta"/>
                    <Link 
                        to="./search"
                        className="MenuInicio__boton"
                        onClick={props.consulta}>
                            <Icon />    
                            Consulta
                    </Link>
                    <BotonInicio name="Agenda" route="/" />
                </div>
            </div>
        )
}

export default Menu