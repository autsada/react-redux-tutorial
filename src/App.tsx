import { useEffect } from 'react'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'

import Nav from './components/Nav'
import Products from './pages/Products'
import Signin from './pages/SIgnin'
import Cart from './pages/Cart'
import { useAppSelector } from './store/store'

import './App.css'

function UnAuthApp() {
    return (
        <Switch>
            <Route path='/signin'>
                <Signin />
            </Route>
            <Route path='/'>
                <Products />
            </Route>
        </Switch>
    )
}

function AuthApp() {
    return (
        <Switch>
            <Route path='/cart'>
                <Cart />
            </Route>
            <Route path='/'>
                <Products />
            </Route>
        </Switch>
    )
}

function App() {
    const { user } = useAppSelector((state) => state.auth)

    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        if (!user && location.pathname === '/cart') history.push('/signin')
        else history.push('/')
    }, [user, history])

    return (
        <div className='App'>
            <Nav />

            {!user ? <UnAuthApp /> : <AuthApp />}
        </div>
    )
}

export default App
