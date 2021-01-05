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
        console.log(e.target.value)
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