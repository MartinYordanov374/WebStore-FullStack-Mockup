import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header'
import Products from './Components/Products'
import Footer from './Components/Footer'

import {store} from './Components/store'

import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar></Navbar>
        <Products></Products>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
