import {Component} from 'react'
import './styles/Inicio.css'
import SearchForm from '../components/SearchForm'
import Menu from '../components/Menu'
import Logo from '../components/Logo'

const ChangingArea = (props)=> {
    return(
        <div className="Changingarea flex-column">
            <SearchForm 
                inputChange={props.inputChange} 
                formValues={props.formValues} 
                search={props.search}    
            />
        </div>
    )
}

class Search extends Component {

    initialState = {
        apellido: '',
        folio: '',
        fechaAlta: ''
    }
    
    state = {
        searchForm: this.initialState
    }

    handleChange = e => {
        this.setState({
            searchForm:{
                ...this.state.searchForm,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSearch = () => {

    }

    render(){
        return(
            <div className="blue-container">
                <Logo />
                <Menu />
                <ChangingArea 
                    inputChange={this.handleChange} 
                    formValues={this.state.searchForm}
                    search={this.handleSearch}    
                />
            </div>
        )
    }
}

export default Search