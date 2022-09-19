import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import InfoScreen from './components/auth/InfoScreen';
import LoginScreen from './components/auth/LoginScreen';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<LoginScreen/>}/>
          <Route path="/info" element={<InfoScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
