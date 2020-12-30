import {Component} from 'react'
import './styles/Inicio.css'
import SearchForm from '../components/SearchForm'
import Menu from '../components/Menu'

let altas = []

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
        altas.push(this.state.searchForm)
        console.log(altas)
    }

    render(){
        return(
            <div className="Inicio__container">
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