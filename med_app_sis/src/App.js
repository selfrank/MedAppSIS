import './App.css';
import React from "react"; 
import {BrowserRouter, Routes, Route, withRouter} from "react-router-dom";
import Navigation from "./pages/navigation";
import Home from "./pages/home";
import Food from "./pages/food";
import SignIn from "./pages/signin";
import CreateAccount from './pages/createaccount';
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
          <Route path = '/signin/' exact element={<SignIn/>} />
          <Route path = '/CreateAccount' exact element={<CreateAccount/>}/>
          
        </Routes>
        </div>
        </UserContext.Provider>
        </BrowserRouter>

  );
}

export default App;
