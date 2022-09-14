import React from 'react'
import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

export const NoMatch = () => {
  const navigate = useNavigate()
  return (
    <div className="noMat">
      <h1>No Match Found!</h1>
      <p style={{textAlign: "center"}}>WE ARE SORRY unde omnis iste natus error.</p>
      <p style={{textAlign: "right"}}><button className='btn-bck' onClick={() => navigate(-1)}><IoIosArrowBack/> GO BACK </button></p>
    </div>
  )
}