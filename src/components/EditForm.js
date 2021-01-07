import {Component} from 'react'

import './styles/AltaForm.css'

class EditForm extends Component {    
    render(){
        let formValues = this.props.formValues
        let onFormChange = this.props.onFormChange
        let onSubmit = this.props.onSubmit

        return(
            <form className="alta_form" onSubmit={onSubmit}>
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
                        name="fechaIngreso" 
                        type="date"
                        onChange={onFormChange}
                        value={formValues.fechaIngreso}  
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
                        name="fechaNac" 
                        type="date"
                        onChange={onFormChange}
                        value={formValues.fechaNac}  
                    />        
                <label>Estado civil</label>
                <select onChange={onFormChange} name="civil">
                    <option value="solter@">solter@</option>
                    <option value="casad@">casad@</option>
                </select>
                <button 
                    type="submit"
                    className="prm-button">
                        Guardar
                </button>      
            </form>
        )
    }
}

export default EditForm