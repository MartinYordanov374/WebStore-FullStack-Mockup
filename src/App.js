import logo from './logo.svg';
import './App.css';
import Products from './Components/Products'
import HoodiesPage from './Components/HoodiesPage'
import MasksPage from './Components/MasksPage'
import Wishlist from './Components/Wishlist'
import ShoppingCart from './Components/ShoppingCart'

import Login from './Components/Login'
import Register from './Components/Register'
import ProfilePage from './Components/ProfilePage'

import NotFoundPage from './Components/NotFoundPage';
import ChangePass from './Components/ChangePass' 
import orderFinished from './Components/orderFinished'
import New from './Components/New'
import Sale from './Components/Sale'
import {store} from './Components/store'
import PrivacyPolicy from './Components/PrivacyPolicy'
import TermsOfUse from './Components/TermsOfUse'


import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import {useState, useEffect} from 'react'

function App () {

    let cookie = document.cookie;
    console.log("app cookie", cookie)
    const [loginStatus, setLoginStatus] = useState('')
    useEffect(()=>{
      if(cookie.length>3)
      {
          setLoginStatus('logged in')
      }
      else
      {
        setLoginStatus('logged out')
      }
    },[])
    return (
        <div className="App">
        <Provider store={store}>
          <Router> 
            <Switch>
                <Route exact path='/Home' component={Products}/>

                <Route path='/Men' component={HoodiesPage}/>
                <Route path='/Women' component={MasksPage}/>
                <Route path='/Cart' component={ShoppingCart}/>
                <Route path='/Wishlist' component={Wishlist}/>

                <Route path='/Login' component={Login}/>
                <Route path='/Register' component={Register}/>
                <Route path='/ProfilePage' component={ProfilePage}/>
                <Route path='/ChangePass' component={ChangePass}/>
                <Route path='/orderFinished' component={orderFinished}/>
                <Route path='/New' component={New}/>
                <Route path ='/Sale' component={Sale}/>
                <Route path ='/privacyPolicy' component={PrivacyPolicy}/>`
                <Route path ='/termsofuse' component={TermsOfUse}/>
`




                <Route path="*" component={NotFoundPage} />

            </Switch>
          </Router>
        </Provider>
        {console.log(loginStatus)}
        </div>
    );
  }

export default App;
