import {Component} from 'react'
import './styles/SearchForm.css'

class SearchForm extends Component {

    render(){
        return(
            <form className="searchForm flex-column">
                <label>Apellido</label>
                <input 
                    name="apellido" 
                    value={this.props.formValues.apellido} 
                    onChange={this.props.inputChange}
                />
                <label>Folio</label>
                <input name="folio" 
                    value={this.props.formValues.folio} 
                    onChange={this.props.inputChange}
                />
                <label>Fecha de alta</label>
                <input name="fechaAlta" 
                    value={this.props.formValues.fechaAlta}
                    onChange={this.props.inputChange}
                />   
                <button 
                    className="prm-button" 
                    type="button"
                    onClick={this.props.search}>
                        Buscar
                </button>             
            </form>
        )
    }
}

export default SearchForm