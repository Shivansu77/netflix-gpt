import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm,setSignInForm]=useState(true);
    const toggleSignUpForm = () => {
        setSignInForm(!isSignInForm);
    }
  return (
    <div className="relative h-screen w-full">
      <Header />

      <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg" 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black bg-opacity-80 p-8 rounded w-[400px]">
        <h2 className="text-white text-2xl font-bold mb-6">{isSignInForm? "Sign In" : "Sign Up"}</h2>
        {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="m-2 p-3 rounded bg-gray-800 text-white placeholder-gray-400 w-full"
            />
          ) }
        <input 
          type="email" 
          placeholder="Email" 
          className="m-2 p-3 rounded bg-gray-800 text-white placeholder-gray-400 w-full"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="m-2 p-3 rounded bg-gray-800 text-white placeholder-gray-400 w-full"
        />
        <button className="m-4 p-3 bg-red-600 rounded text-white font-semibold hover:bg-red-700 transition w-full">
          Sign In
        </button>
        <p className='text-white mt-4 text-center' onClick={toggleSignUpForm}>
         {isSignInForm? "New to Netflix" : "Already have an account?"} <span className='text-blue-600 cursor-pointer hover:underline'>{isSignInForm? "Sign Up Now" : "Sign In"}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
