import './App.css';
import { Route,Routes } from 'react-router-dom';
import Add from './components/Add';
import Login from './components/Login';
import Adduser from './components/Adduser';
import Register from './components/Register';
import User from './components/User';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='add' element={<Add/>} />
        <Route path='adduser' element={<Adduser/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='user' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
