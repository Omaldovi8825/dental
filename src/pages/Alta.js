import {Component} from 'react'

import './styles/Alta.css'

import AltaForm from '../components/AltaForm'
import AltaCard from '../components/AltaCard'
import Logo from '../components/Logo'

class Alta extends Component {
    state = {
        nombre:'',
        apellido1:'',
        apellido2:'',
        foto:'',
        folio:'',
        fechaAlta:'',
        telefono:'',
        celular:'',
        lugarNac:'',
        fechaNaci:'',
        civil:'',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div className="container-alta">
                <AltaForm 
                    formValues={this.state} 
                    onFormChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                />
                <div className="alta-right-side">
                    <Logo className="container-alta-logo"/>
                    <AltaCard formValues={this.state}/>
                </div>
            </div>
        )
    }
}

export default Alta