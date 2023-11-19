import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import { useContext, useEffect } from 'react';
import UserContext from './Context/user/UserContext';
import Profile from './Components/Profile/Profile';
import AdminUsers from './Components/Admin/AdminUsers/AdminUsers';
import MyProperty from './Components/Profile/MyProperty';
import UpdateProperty from './Components/UpdateProperty/UpdateProperty';

function App() {

  const userContext = useContext(UserContext);
  const { setUser } = userContext;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await setUser();
      } catch (error) {
        console.log("Error while fetching userData: ", error);
      }
    }
    if (localStorage.getItem('token')) {
      fetchUser();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element=<Home />></Route>
          <Route exact path='/buy' element=<Buy />></Route>
          <Route exact path='/rent' element=<Rent />></Route>
          <Route exact path='/login' element={!(localStorage.getItem("token")) ? <Login /> : <Navigate to="/" />}></Route>
          <Route exact path='/signup' element={!(localStorage.getItem("token")) ? <Signup /> : <Navigate to="/" />}></Route>
          <Route exact path='/listproperty' element={(localStorage.getItem("token")) ? <Form /> : <Navigate to="/login" />}></Route>
          <Route exact path='/contact' element=<Contact />></Route>
          <Route exact path='/about' element=<About />></Route>
          <Route exact path='/postproperty' element=<PostProperty />></Route>
          <Route exact path='/adminlogin' element=<AdminLogin />></Route>
          <Route exact path='/adminuser' element=<AdminUsers />></Route>
          <Route exact path='/adminhome' element=<Dashboard />></Route>
          <Route exact path='/profile' element={(localStorage.getItem("token")) ? <Profile /> : <Navigate to="/" />}></Route>
          <Route exact path='/myproperty' element={(localStorage.getItem("token")) ? <MyProperty /> : <Navigate to="/" />}></Route>
          <Route exact path='/updateproperty/:propertyid' element={(localStorage.getItem("token")) ? <UpdateProperty /> : <Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
