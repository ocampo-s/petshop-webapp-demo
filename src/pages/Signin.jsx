import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../components/context/AuthContext'
import '../components/styles/Forms.css'
import '../components/styles/Button.css'
import * as Arrows from "react-icons/go"

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
      alert("You have successfully logged in!")
    } catch (e) {
      setError(e.message)
      console.log(e.message)
      alert("Invalid Sign In. Try again") //not in tutorial
    }

    setEmail('');
    setPassword('');

  }

  return (
    <div className='container'>
      <div>
        <h1>SIGN IN</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          
          <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='EMAIL' />
        </div>
        <div>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' placeholder='PASSWORD'/>
        </div>
        <button className='btn-blue'>SIGN IN</button>
      </form>
        <div>
          <p className='form-p'>Don't have an account?
          <Link className='form-link' to='/signup'> SIGN UP <Arrows.GoArrowRight/></Link>
          </p>
          <br/>
        </div>
    </div>
  )
}

export default Signin;