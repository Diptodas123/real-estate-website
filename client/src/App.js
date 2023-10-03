import './App.css';
import Home from "./Components/Home/Home";
import Buy from "./Components/Buy/Buy";
import Rent from "./Components/Rent/Rent";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Form from './Components/Form/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element=<Home />></Route>
          <Route exact path='/buy' element=<Buy />></Route>
          <Route exact path='/rent' element=<Rent />></Route>
          <Route exact path='/login' element=<Login />></Route>
          <Route exact path='/signup' element=<Signup />></Route>
          <Route exact path='/sell' element=<Form />></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
