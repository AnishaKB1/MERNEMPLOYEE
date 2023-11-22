
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginUser from './components/LoginUser';
import UserHome from './pages/UserHome';
import Main from './components/Main';
import Addemployee from './pages/Addemployee';
import AdminHome from './pages/AdminHome';
import Mainadmin from './components/Mainadmin';
import { Requireauth } from './Auth';
import { Logout } from './Logout';

function App() {
  return (
    <div className="App">
      <Routes>
      

      <Route path = '/' element={<LoginUser/>}></Route>
      <Route path = '/Logout' element={<Logout/>}></Route>
      <Route path = '/userhome' element={<Requireauth><Main child ={<UserHome/>}/></Requireauth>}></Route> 


  
      <Route path = '/addemployee' element={<Requireauth><Mainadmin child ={<Addemployee/>}/></Requireauth>}></Route> 

      <Route path = '/AdminHome' element={<Requireauth><Mainadmin child ={<AdminHome/>}/></Requireauth>}></Route> 
      
    </Routes>
  
    </div>
  );
}

export default App;
