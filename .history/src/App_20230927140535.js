import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Table from './components/Table';
import Menu from './components/Menu';
import Order from './components/Order';
import ItemState from './components/context/ItemState';
function App() {
  return (
    <div className="App">
        <Router>
      <ItemState>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/menu" element={<Menu />}></Route>
            <Route exact path="/book" element={<Table />}></Route>
            <Route exact path="/proceed" element={<Order />}></Route>
          </Routes>
          {/* <Main /> */}
          <Footer />
          
      </ItemState>
        </Router>
    </div>
  );
}

export default App;
