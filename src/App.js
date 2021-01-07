import {BrowserRouter, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Search from './pages/Search'
import Alta from './pages/Alta'
import ClientDetails from './pages/ClientDetails'

const App = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/alta" component={Alta} />
      <Route exact path="/client/:clientId" component={ClientDetails} />
    </BrowserRouter>
  )
}

export default App