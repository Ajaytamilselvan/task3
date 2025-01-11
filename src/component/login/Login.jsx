import React from 'react'

const Login = () => {
    
    const [formData,setFormData]=useState([]);


    const handleInput=(e)=>{
      var key= e.target.name
      var value= e.target.value 
      setFormData({...formData ,[key]:value})

    }
    
    
    const handleSubmit=async (e)=>{
      e.preventDefault()
      if(formData.username==='ajay'){
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

export default login