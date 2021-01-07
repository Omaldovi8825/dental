import SearhCard from './SearchCard'

const SearchCardList = (props) => {
    
    let {clients} = props
    console.log(clients)

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