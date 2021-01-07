import {Component} from 'react'

import './styles/Alta.css'

import AltaForm from '../components/AltaForm'
import AltaCard from '../components/AltaCard'
import Logo from '../components/Logo'

class Alta extends Component {
    state = {
        form:   {
            nombre:'',
            apellido1:'',
            apellido2:'',
            foto:'',
            folio:'',
            fechaAlta:'',
            telefono:'',
            celular:'',
            lugarNac:'Toluca, Mexico',
            fechaNaci:'',
            civil:'solter@',
        },
        clients: []
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
             }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            clients: 
                [...this.state.clients,
                this.state.clients.push(this.state.form)]
        })
        console.log(this.state.clients)
        this.props.history.push('/search')
    }

    render(){
        return(
            <div className="container-alta">
                <div className="alta-left-side">
                    <div className="alta-header">
                        <h1>Alta</h1>
                        <Logo className="container-alta-logo"/>
                    </div>
                    <AltaCard formValues={this.state.form}/>
                </div>
                <AltaForm 
                    formValues={this.state} 
                    onFormChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default Alta