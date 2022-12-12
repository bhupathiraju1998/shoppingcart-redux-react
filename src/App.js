import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route exact path="/" component={ProductListing}/>
        <Route exact path="/product/:productId"  component={ProductDetail}/>
        <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
