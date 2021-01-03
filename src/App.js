import {BrowserRouter, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Search from './pages/Search'
import Alta from './pages/Alta'
import Prueba from './pages/Prueba'

const App = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/alta" component={Alta} />
      <Route exact path="/prueba" component={Prueba} />                
    </BrowserRouter>
  )
}

export default App