import logo from './logo.svg';
import './App.css';
import Products from './Components/Products'
import HoodiesPage from './Components/HoodiesPage'
import MasksPage from './Components/MasksPage'
import Wishlist from './Components/Wishlist'
import ShoppingCart from './Components/ShoppingCart'
import Login from './Components/Login'
import {store} from './Components/store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
function App() {
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

          </Switch>
        </Router>
      </Provider>

      </div>
  );
}

export default App;
