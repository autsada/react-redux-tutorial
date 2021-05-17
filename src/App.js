import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Products from './pages/Products'
import Signin from './pages/SIgnin'
import Cart from './pages/Cart'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/'>
          <Products />
        </Route>
      </Switch>
    </div>
  )
}

export default App
