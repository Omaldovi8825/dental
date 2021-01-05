import {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles/SearchHeader.css'

class SearchHeader extends Component {
    render(){
        const logoInicio = 'https://i.ibb.co/tPSw1wm/denti-inicio.png'

        return(
            <header className="search-header">
                <div className="search-header-consulta">
                    <h1>Consulta</h1>
                    <input 
                        type="text"
                        onChange={this.props.onInputChange}
                    />
                </div>
                <Link to="./">
                    <img src={logoInicio} alt="logo inicio"></img>
                </Link>
            </header>
        )
    }
}

export default SearchHeader