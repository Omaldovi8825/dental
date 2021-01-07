import SearhCard from './SearchCard'

const SearchCardList = (props) => {
    
    let {clients} = props

    return(
        <div className="cards-area">
            {clients.map((client) => {
                return(
                    <SearhCard key={client.folio} clientInfo={client}/>
                )
            })}
        </div>
    )
}

export default SearchCardList