import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Mission from './components/Mission';
import AboutUs from './components/AboutUs';
import CartPage from './components/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Mission" element={<Mission />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/cart" element={<CartPage />} /> {/* Updated cart route */}
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
