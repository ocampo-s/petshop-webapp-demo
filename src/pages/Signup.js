import React, { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Link } from 'react-router-dom'
import '../components/styles/Forms.css'
import '../components/styles/Button.css'
import * as Arrows from "react-icons/go"
import {ImCheckboxUnchecked} from "react-icons/im"

function Signup() {
  
  const auth = getAuth();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [user] = useState({}) Line 14 orig
  const [setUser] = useState({})

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        alert("You have successfully created an account ")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode)
        // ..
      });

  }


    useEffect(()=> {
      //firebase auth state observer
      getAuth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in
          var email = user.email;
          console.log('käyttäjä: ', (email))
          setUser(email)
  
        } else {
          // User is signed out
          console.log('Ei ole käyttäjää.')
          setUser(null)
        }
      });
    })
  


  return (
    
    <div className="container">
      <h1>SIGN UP</h1>
        <div>
          <input type={"email"} placeholder="YOUR EMAIL" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <input type={"password"} placeholder="CREATE A PASSWD" onChange={(e) => setPassword(e.target.value)}/>
        </div>
          
          <button className='btn-blue' onClick={signUp}>CREATE ACCOUNT</button>
          <p className='form-p'><ImCheckboxUnchecked/> I accept petshop Web TERMS of services. <Link className='form-link' to='/terms'> Read the TERMS<Arrows.GoArrowRight/></Link></p>
        <br/>
          
    </div>
  );
}

export default Signup;

