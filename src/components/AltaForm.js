import {Component} from 'react'

import './styles/AltaForm.css'

class AltaForm extends Component {    
    render(){
        let formValues = this.props.formValues
        let onFormChange = this.props.onFormChange

        return(
            <form className="alta_form">
                <label>Nombre</label>
                <input 
                    name="nombre" 
                    type="text"
                    onChange={onFormChange}
                    value={formValues.nombre} 
                />    
                <label>Apellido paterno</label>
                <input 
                    name="apellido1" 
                    type="text" 
                    onChange={onFormChange}
                    value={formValues.apellido1} 
                />
                <label>Apellido materno</label>
                <input 
                    name="apellido2" 
                    type="text"
                    onChange={onFormChange}
                    value={formValues.apellido2}  
                />
                <label>Foto URL</label>
                <input 
                    name="foto" 
                    type="text"
                    onChange={onFormChange}
                    value={formValues.foto}  
                />
                <label>Folio</label>
                <input 
                    name="folio" 
                    type="number"
                    onChange={onFormChange}
                    value={formValues.folio}  
                />      
                <label>Fecha de ingreso</label>
                    <input 
                        name="fechaAlta" 
                        type="date"
                        onChange={onFormChange}
                        value={formValues.fechaAlta}  
                    />      
                <label>Telefono fijo</label>
                <input 
                    name="telefono" 
                    type="text"
                    onChange={onFormChange}
                    value={formValues.telefono}  
                />    
                <label>Celular</label>
                <input 
                    name="celular" 
                    type="text"
                    onChange={onFormChange}
                    value={formValues.celular}  
                />    
                <label>Lugar de Nacimiento</label>
                <input 
                    name="lugarNac" 
                    type="text"
                    onChange={onFormChange}
                    value={formValues.lugarNac}  
                />
                <label>Fecha de nacimiento</label>
                    <input 
                        name="fechaNaci" 
                        type="date"
                        onChange={onFormChange}
                        value={formValues.fechaNaci}  
                    />        
                <label>Estado civil</label>
                <select onChange={onFormChange} name="civil">
                    <option value="solter@">solter@</option>
                    <option value="casad@">casad@</option>
                </select>
                <button 
                    type="button"
                    className="prm-button">
                        Crear
                </button>      
            </form>
        )
    }
}

export default AltaForm