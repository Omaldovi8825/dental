import {Component} from 'react'

import './styles/Search.css'
import db from '../server/db.json'

import SearchHeader from '../components/SearchHeader'
import SearchCardList from '../components/SearchCardList'

class Search extends Component {
    state = {
        clients: db
    }

    handleSearch = e => {
        const filteredClient = db.filter(client => {
            return `${client.apellido1.toLowerCase()} ${client.folio}`.includes(e.target.value.toLowerCase())
        }) 
        
        this.setState({
            clients: filteredClient
        })
    }

    render(){
        return(
            <div>
                <SearchHeader onInputChange={this.handleSearch}/>
                <SearchCardList clients={this.state.clients}/>
            </div>
        )
    }
}

export default Search