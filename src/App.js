import {BrowserRouter, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Search from './pages/Search'


const App = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/search" component={Search} />
    </BrowserRouter>
  )
}

export default App