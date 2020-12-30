import {Component} from 'react'
import './styles/Inicio.css'
import Menu from '../components/Menu'

const Logo = () => {
    return(
        <img 
            className="Inicio__logo" 
            src="https://i.ibb.co/tPSw1wm/denti-inicio.png" 
            alt="logo">   
        </img>
    )
}

const ChangingArea = (props)=> {
    return(
        <div className="Changingarea flex-column">
            <img className="Changingarea__img" src="https://i.ibb.co/RHfqSh3/dental.jpg" alt="dentista" />
        </div>
    )
}

class Inicio extends Component {
    render(){
        return(
            <div className="Inicio__container">
                <Logo />
                <Menu />
                <ChangingArea />
            </div>
        )
    }
}

export default Inicio