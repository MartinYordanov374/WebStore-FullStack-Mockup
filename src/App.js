import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header'
import Products from './Components/Products'
import {store} from './Components/store'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar></Navbar>
        <Products></Products>
      </div>
    </Provider>
  );
}

export default App;
