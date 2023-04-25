import './App.css';
import { Route,Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='admin' element={<Admin/>} />
        <Route path='register' element={<Register/>}/>
        <Route path='user' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
