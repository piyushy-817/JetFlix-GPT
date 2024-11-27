import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import netflix_Background from "../utils/netflix_background.jpg";
import Header from "./Header";
import validateForm from "../utils/validateForm";
import { app } from "../utils/Firebase";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { userLoginLogo } from "../utils/Constants";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const handleFormToggle = () => {
    setIsSignForm(!isSignForm);
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleBtnClick = () => {
    const email = emailRef?.current?.value || "";
  const password = passwordRef?.current?.value || "";
  const name =  nameRef?.current?.value || "Guest" 

  const message = 
     
    validateForm(email, password); // Validate email and password for sign-in

  setErrorMsg(message);
    if (message) return;
  
    const auth = getAuth(app);
    

    if (!isSignForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          
          // Update user profile
          updateProfile(user, {
            displayName: name,
            photoURL: userLoginLogo,
          })
          .then(() => {
            // Fetch updated user data after profile update
            const updatedUser = {
              uid: user.uid,
              email: user.email,
              displayName: name, // Use the value you set
              photoURL: userLoginLogo, // Use the value you set
            };
    
            // Dispatch updated user to Redux
            dispatch(addUser(updatedUser));
          })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          setErrorMsg(`${error.code} --- ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user signed in", user);
        })
        .catch((error) => {
          setErrorMsg(`${error.code} --- ${error.message}`);
        });
    }
  };
  

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          className="object-contain h-auto "
          alt="background_moviesimg"
          src={netflix_Background}
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white absolute rounded-lg bg-opacity-80 bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0"
      >
        <h1 className="text-center text-3xl py-2">
          {isSignForm ? "Sign In" : "Sign Up Form"}
        </h1>

        {!isSignForm && (
          <div>
            <input
              ref={nameRef}
              className="rounded-lg bg-gray-800 p-4 my-2 w-full"
              type="text"
              placeholder="Full Name"
            ></input>
          </div>
        )}

        <input
          ref={emailRef}
          className="rounded-lg mt-2 bg-gray-800 p-4 my-2 w-full"
          type="email"
          placeholder="Email Address"
        ></input>

        <input
          ref={passwordRef}
          className="rounded-lg bg-gray-800 p-4 my-2 w-full"
          type="password"
          placeholder="Password"
        ></input>
        <div className="text-red-500">{errorMsg}</div>

        <button
          onClick={handleBtnClick}
          className="rounded-lg  p-4 mt-6 mb-2 w-full bg-red-700"
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={handleFormToggle}
          className="text-xs text-center cursor-pointer"
        >
          {isSignForm
            ? "Not a Jetflix Member yet? Sign up now!"
            : "Already a User? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
