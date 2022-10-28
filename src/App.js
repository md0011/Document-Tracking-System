import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login Authentication/LoginPage';
import Success from './Pages/Success Page/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/success' element={<Success/>} />
      </Routes>
    </Router>
  );
}

export default App;
