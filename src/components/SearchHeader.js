import {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles/SearchHeader.css'

class SearchHeader extends Component {
    render(){
        const logoInicio = "https://i.ibb.co/HKZpPN7/denti-home.png" 

        return(
            <header className="search-header">
                <h1>Consulta</h1>
                <i className="fas fa-search">
                <input 
                    type="text"
                    onChange={this.props.onInputChange}
                />
                </i>
                <Link to="/">
                    <img className="search-header-logo" src={logoInicio} alt="logo inicio"></img>
                </Link>
            </header>
        )
    }
}

export default SearchHeader