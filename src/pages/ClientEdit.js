import {Component} from 'react'

import Logo from '../components/Logo'
import AltaCard from '../components/AltaCard'
import EditForm from '../components/EditForm'

import db from '../server/db.json'

class ClientEdit extends Component {
    state = {
        form: db[this.props.match.params.clientId - 1],
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
        this.props.history.push('/search')
    }

    render(){
        return(
            <div className="container-alta">
                <div className="alta-left-side">
                    <div className="alta-header">
                        <h1>Editar Paciente</h1>
                        <Logo className="container-alta-logo"/>
                    </div>
                    <AltaCard formValues={this.state.form}/>
                </div>
                <EditForm 
                    formValues={this.state.form} 
                    onFormChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default ClientEdit

