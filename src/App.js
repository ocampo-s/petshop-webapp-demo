import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import Products from './pages/Products'
import { Addprod } from './pages/Addprod'
// import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { NoMatch } from './pages/NoMatch'
import Account from './pages/Account'
import { AuthContextProvider } from './components/context/AuthContext'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/products' element={<ProtectedRoute><Products/></ProtectedRoute>} />
        <Route path='/addprod' element={<ProtectedRoute><Addprod/></ProtectedRoute>} />
        {/* <Route path='/signup' element={<Signup />} /> */}
        <Route path='/signin' element={<Signin />} />
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />
        <Route path='*' element={<NoMatch />} />
        </Routes>
      </AuthContextProvider>
      
    </>
  );
}

export default App;
