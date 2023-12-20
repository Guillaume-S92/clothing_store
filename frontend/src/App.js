import './App.css'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'


// pages
import mainPage from './pages/mainPage'
import FilteredProducts from './pages/FilteredProducts';
import ProductView from './pages/ProductView'
import ShoppingCart from './pages/ShoppingCart'
import ValidationScreen from './pages/ValidationScreen'
import ConfirmationPage from './pages/ConfirmationPage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import {useDispatch} from 'react-redux'
import {fetchCart} from './redux/actions/cartActions'
import {setUserDetails} from './redux/actions/userAction'

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  // fetchCart
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCart())
    dispatch(setUserDetails())
  }, [dispatch])

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />


      <main className="app">
        <Switch>
          <Route exact path="/" component={mainPage} />
          <Route exact path="/category/:category" component={FilteredProducts} />
          <Route exact path="/product/:id" component={ProductView} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/checkout" component={ValidationScreen} />
          <Route exact path="/confirmation" component={ConfirmationPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
