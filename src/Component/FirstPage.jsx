import React from 'react';
import { About } from './About';
import { Home } from './Home';
import { Login } from './Login';
import Search from './Search';
import SignUp from './SignUp';


export const FirstPage = () => {
  return (
      <>
      <div className="navbar">
          <Home />
          <About/>
          <Search/>
          <div className='log-sing-btn'>
              <Login/>
              <SignUp/>

          </div>
          


      </div>
      
      </>
      
    
  )
}
