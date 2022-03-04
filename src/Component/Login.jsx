import React, { useState } from 'react'

export const Login = () => {
    const [logInBody, setLogInBody] = useState(false);
    function LoginHandiler(){
        setLogInBody(true)
    }
  return (
   logInBody===false? <div onClick={LoginHandiler}>Log In</div>:
   <div>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Sir Name' />
        <input type="email" placeholder='Email' />
        <input type="text"  placeholder='Mo No'/>
        <button>Log in</button>
        
        </div>
  )
}
