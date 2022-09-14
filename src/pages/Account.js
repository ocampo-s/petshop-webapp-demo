import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../components/context/AuthContext'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"

const Account = () => {
  const {user, logout} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logged out')
      alert("You have successfully logged out") //not in tutorial
    } catch (e) {
      console.log(e.message)
    }
  };

  return (
    <div className="accou">
      <h1>ACCOUNT</h1>
      <p style={{textAlign: "center"}}>user</p>
      <p style={{textAlign: "center", fontWeight: "bold"}}>{user && user.email}</p>
      <p style={{textAlign: "right"}}><Link to='/terms' style={{fontWeight: "bold", textDecoration: "none"}}>TERMS <IoIosArrowForward/></Link></p>
      <button onClick={handleLogout} className='btn'>SIGN OUT</button>
    </div>


  )
}

export default Account
