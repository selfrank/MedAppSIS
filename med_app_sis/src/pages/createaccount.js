import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import firebaseService from "../components/firebase";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import {Card} from "../components/context";
//import axios from "axios";



export default function CreateAccount() {

  return (<>
    <Card
      bgcolor="secondary"
      header="Create Account"  
      body={SignUp()}
    />
    </>
  )
  }
  function SignUp(){
  const [fields, setFields] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
		
    if (fields.password.length < 6) {
      return setError("Password must be at least 6 characters in length.");
    }
    if (fields.confirmPassword !== fields.password) {
      return setError("Password and confirm password must match.");
    }
    let email= fields.email;
    let password= fields.password;
    let name=fields.name;
    /*try {
      const req =  fetch(`http://161.35.96.121:3001/account/create/${name}/${email}/${password}`)
      .then(response => response.text())
      .then(text => {
      const data = JSON.parse(text);
      const message = {data};
        try{
          createUserWithEmailAndPassword(
            firebaseService.auth,
            fields.email,
            fields.password)
        } catch (err) {
          console.log(err);
          setError("Invalid email address or password.");
        }
        
          
      return navigate("/signin", {
        replace: true,
        state: {
          message
        }
      })});
    } catch (err) {
      const errMessage = err.response.data.error;
      return setError(errMessage);
    }*/
  };

  

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            value={fields.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
        <div style={{ marginTop: "1rem" }}>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}