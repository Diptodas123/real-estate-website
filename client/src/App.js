import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Buy from "./Components/Buy/Buy";
import Rent from "./Components/Rent/Rent";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Form from './Components/Form/Form';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import PostProperty from './Components/PostProperty/PostProperty';
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import UserState from './Context/user/UserState';

function App() {
  return (
    <>
      <UserState>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element=<Home />></Route>
            <Route exact path='/buy' element=<Buy />></Route>
            <Route exact path='/rent' element=<Rent />></Route>
            <Route exact path='/login' element=<Login />></Route>
            <Route exact path='/signup' element=<Signup />></Route>
            <Route exact path='/listproperty' element=<Form />></Route>
            <Route exact path='/contact' element=<Contact />></Route>
            <Route exact path='/about' element=<About />></Route>
            <Route exact path='/postproperty' element=<PostProperty />></Route>
            <Route exact path='/adminlogin' element=<AdminLogin />></Route>
            <Route exact path='/adminhome' element=<Dashboard />></Route>
          </Routes>
        </BrowserRouter>
      </UserState>
    </>
  );
}

export default App;
