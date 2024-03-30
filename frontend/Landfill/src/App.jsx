import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Home from './HomePage/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
