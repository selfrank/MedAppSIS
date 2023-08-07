import './App.css';
import React from "react"; 
import {BrowserRouter, Routes, Route, withRouter} from "react-router-dom";
import Navigation from "./pages/navigation";
import Home from "./pages/home";
import Food from "./pages/food";
import CreateAccount from './pages/createaccount';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Symptoms from './pages/symptoms';
import Sleep from './pages/sleep';
import Stress from './pages/stress';

export const UserContext = React.createContext(null);


function App() {
  return (
        <BrowserRouter>
        <Navigation/>
        <UserContext.Provider value={{users:[{name:'ibarra',email:'sarah.elfrank@gmail.com',password:'secret'}]}}>
        <div className="container" style={{padding: "20px"}}>
        <Routes>
          <Route exact path="/"  element = {<Home/>}/>
          <Route path = "food" exact element = {<Food/>} />
          <Route path='/sleep/' exact element = {<Sleep/>}/>
          <Route path='/stress/' exact element = {<Stress/>}/>
          <Route path='/symptoms/' exact element = {<Symptoms/>}/>
          <Route path = '/CreateAccount' exact element={<CreateAccount/>}/>
          <Route path = '/login' exact element={<Login/>}/>
          <Route path = '/dashboard' exact element={<Dashboard/>}/>
        </Routes>
        </div>
        </UserContext.Provider>
        </BrowserRouter>

  );
}

export default App;
