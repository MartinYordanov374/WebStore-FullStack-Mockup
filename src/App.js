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
import {store} from './Components/store'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import {Component} from 'react'

class App extends Component {
  render(){
    let cookie = document.cookie;
    return (
        <div className="App">
        <Provider store={store}>
          <Router> 
            
            <Switch>
                <Route exact path='/Home' component={Products}/>

                <Route path='/Hoodies' component={HoodiesPage}/>
                <Route path='/Masks' component={MasksPage}/>
                <Route path='/Cart' component={ShoppingCart}/>
                <Route path='/Wishlist' component={Wishlist}/>

                <Route path='/Login' component={Login}/>
                <Route path='/Register' component={Register}/>
                <Route path='/ProfilePage' component={ProfilePage}/>
                <Route path="*" component={NotFoundPage} />

            </Switch>
          </Router>
        </Provider>
        
        </div>
    );
  }
}

export default App;
