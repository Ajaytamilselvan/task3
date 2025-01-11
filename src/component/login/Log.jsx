import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

// import { Navigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Log = () => {
  const [formData,setFormData]=useState([]);


  const handleInput=(e)=>{
    var key= e.target.name
    var value= e.target.value 
    setFormData({...formData ,[key]:value})

  }
  
  const navigate=useNavigate();
  
  const handleSubmit=async (e)=>{
    e.preventDefault()
    if(formData.username==='ajay'){
      navigate('/Nav')
    }
    
  }
return (
      <>
          <div className="LoginPage">
              <div className="LoginInputContainer">
                  <form>
                      <h2>Login</h2>
                      <label>Username: <input type="text" name='username'  onChange={handleInput}/></label>
                      <label>Password: <input type="text" name='password' onChange={handleInput}/></label>
                      <button onClick={handleSubmit}>Submit</button>
                  
                  </form>
              </div>
          </div>
          
      </>
  )

}

export default Log