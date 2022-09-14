import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import * as Icons from "react-icons/bi"
import { FiLogIn } from "react-icons/fi"
import "./styles/Button.css"


import { UserAuth } from '../components/context/AuthContext'



function Button() {
   const {user, logout} = UserAuth()
   const navigate = useNavigate()
   
   const handleLogout = async () => {
       try {
         await logout()
         navigate('/')
         console.log('You are logged out')
         alert("You have successfully logged out")
       } catch (e) {
         console.log(e.message)
       }
     };
 
  return (
    <>
      {user ? (<button onClick={handleLogout} className='btn'>
					<Icons.BiLogOut />
					<span>SIGN OUT</span>
				</button>):
        (<>
          <Link style={{textDecoration: "none"}} to="signup">
            <button className="btn">
            <FiLogIn />
            <span>SIGN UP</span>
            </button>
          </Link>
          <Link style={{textDecoration: "none"}} to="signin">
            <button className="btn">
            <Icons.BiLogIn />
            <span>SIGN IN</span>
            </button>
          </Link>
          
      </>)}
    </>
  );
}

export default Button; 