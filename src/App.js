import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Login from "./components/login/Login";
import UserList from './components/store/UserList';
import Dashboard from './components/Dashboard/Dashboard';
import PetInfo from './components/PetInfo/PetInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/user-list' element={<UserList/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/add-pet' element={<PetInfo/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
