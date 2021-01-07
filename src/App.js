import {BrowserRouter, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Search from './pages/Search'
import Alta from './pages/Alta'
import ClientDetails from './pages/ClientDetails'
import ClientEdit from './pages/ClientEdit'

const App = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/alta" component={Alta} />
      <Route exact path="/paciente/:clientId" component={ClientDetails} />
      <Route exact path="/paciente/:clientId/edit" component={ClientEdit} />
    </BrowserRouter>
  )
}

export default App