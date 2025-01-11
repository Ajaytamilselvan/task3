import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Weather.css'



const Weather = () => {

  const navclose=useNavigate();
  const handleClose=()=>{
    navclose('/Nav')
  }

  return (
    <>
      <div className="close-btn"><button onClick={handleClose}>X</button></div>
      <div className="weather-Container"><h1>Weather API</h1></div>
    </>
  )
}

export default Weather