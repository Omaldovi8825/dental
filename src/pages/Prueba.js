import {Component} from 'react'
import persons from '../db.json'

class Prueba extends Component{
    handleClick = () =>{
        persons.push({
            nombre: "joe",
            apellido: "jerman"
        })
        console.log(persons)
    }

    render(){
        return(
            <div>
                {persons.map((e,i) => {
                    return(
                        <p key={i}>{e.nombre} {e.apellido}</p>
                    )
                })}
                <button type="button" onClick={this.handleClick}>Hey</button>
            </div>
        )
    }
}

export default Prueba