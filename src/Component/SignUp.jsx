import React, { useState } from 'react'

 const SignUp = () => {
     const[signInHandlier, setSignHandiler] = useState(false);
     
  return (
    signInHandlier ===false ? <div
    onClick={()=>{
        setSignHandiler(true)
    }}
    >SignUp</div>:
    <div>
        <input type="email" />
        <input type="password" />
        <button>Sign Up</button>
    </div>
  )
}

export default SignUp;