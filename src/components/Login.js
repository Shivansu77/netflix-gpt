import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setSignInForm(!isSignInForm);
    setErrorMessage(null); // clear errors when toggling
  };

  const handleButtonClick = async () => {
    setErrorMessage(null);
    const message = checkValidData(email.current.value, password.current.value);
    if (message) {
      setErrorMessage(message);
      return;
    }

    setLoading(true);

    try {
      if (!isSignInForm) {
        // Sign up
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log("Signed up:", userCredential.user);
        setErrorMessage("Sign up successful! You can now log in.");
        setSignInForm(true); // switch to sign-in after signup
        navigate("/browse");
        
      } else {
        // Sign in
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log("Signed in:", userCredential.user);
        setErrorMessage(null);
        // Optionally redirect user after login
        navigate("/browse");
      }
    } catch (error) {
      console.error("Firebase Auth Error:", error);
      console.log("Current URL:", window.location.href);
      console.log("Auth domain:", auth.config.authDomain);
      
      if (error.code === 'auth/network-request-failed') {
        setErrorMessage('Network error. Try: 1) Refresh page 2) Check internet 3) Disable VPN/AdBlock');
      } else {
        setErrorMessage(`${error.code} - ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black bg-opacity-80 p-8 rounded w-[400px]"
      >
        <h2 className="text-white text-2xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="m-2 p-3 rounded bg-gray-800 text-white placeholder-gray-400 w-full"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="m-2 p-3 rounded bg-gray-800 text-white placeholder-gray-400 w-full"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-2 p-3 rounded bg-gray-800 text-white placeholder-gray-400 w-full"
        />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          onClick={handleButtonClick}
          disabled={loading}
          className="m-4 p-3 bg-red-600 rounded text-white font-semibold hover:bg-red-700 transition w-full disabled:opacity-50"
        >
          {loading ? "Processing..." : isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-white mt-4 text-center cursor-pointer"
          onClick={toggleSignUpForm}
        >
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <span className="text-blue-600 hover:underline">
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
