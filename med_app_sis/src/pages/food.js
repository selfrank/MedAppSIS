import {Card} from '../components/context';
import React, {useState, useEffect} from 'react';
//import firebaseService from "../firebase";



export default function Food(){


    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
   
    return (<>
      <Card
        bgcolor="info"
        header="Food Entry"
        status={status}

        body={show ? 
          
          <DepositForm setShow={setShow} setStatus={setStatus} /> :
          <DepositMsg setShow={setShow} setStatus={setStatus} />}
      />
      </>
    )
  }

  
  
  function DepositMsg(props){
    return (<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
            props.setShow(true);
            props.setStatus('');
        }}>
          Deposit again
      </button>
    </>);
  } 
  
  function DepositForm(props){
    const [email, setEmail]   = React.useState('');
    const [amount, setAmount] = React.useState('');
    //const [record, setRecord] = React.useState('');
    console.log("Deposit Form email",email);
    ///////////////////////////////////////////////////////////////////////////////////////
    const [record, setRecord] = React.useState();
    const [loadingUser, setLoadingUser] = useState(true);
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState();
    const [currentBalance, setCurrentBalance] = useState();
    const [currentUsername, setCurrentUsername] = useState();
    /*const getUser = async () => {
    const email = await firebaseService.auth.currentUser.email;
    fetch(`http://161.35.96.121:3001/account/findOne/${email}`)
    .then(response => response.text())
    .then (text=>{
      try {
        const data = JSON.parse(text);
        setUser(data);
        setLoadingUser(false);
        console.log("user line 24",user)
        setRecord(data);
        setUserEmail(data.email);
        setCurrentBalance(data.balance);
        setCurrentUsername(data.name);
      }
     catch (err) {
      console.error(err);
    }
  })};

  useEffect(() => {
    getUser();
  }, []);
 console.log("Line 34 record",userEmail)
  */
//////////////////////////////////////////////////////////////////////////////////////
    
    function handle(){
      const email = userEmail;
      fetch(`http://161.35.96.121:3001/account/update/${email}/${amount}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus(data.value.name+"'s blance: $"+JSON.stringify(data.value.balance));
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus('Deposit failed')
              console.log('err:', text);
          }
      });
    }

    

 
    return(<>
  
  <h5>My meals today: <br/>
      </h5>
      <p>{currentUsername}</p><br/>
        
      <br/>
      <div className="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Meal</label>
        <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">Breakfast</option>
            <option value="2">Lunch</option>
            <option value="3">Dinner</option>
            <option value="4">Snack</option>
        </select>
       
        </div>

            <div className="input-group" id="foodEntry">
            <span class="input-group-text">Foods Eaten</span>
            <input type="text" aria-label="First name" class="form-control"></input>
            </div>

            
           
      <div><br/></div>
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>Submit</button>
  
    </>);
  }

  //make submit push food to the day entry for the user and clear the form so more can be added. Have the top of the card list the current foods recorded for the day by meal. Swap current username to meal context

  //Phase 2
  //Look at google fit and myfitnesspal api imports. 