import './styles/Logo.css'
import {Link} from 'react-router-dom'

const Logo = (props) => {
    return(
        <Link to="./">
            <img 
                className={props.className || "Inicio_logo"} 
                src="https://i.ibb.co/tPSw1wm/denti-inicio.png" 
                alt="logo">   
            </img>        
        </Link>
    )
}

export default Logo