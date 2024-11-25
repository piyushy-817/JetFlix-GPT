import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import netflix_Background from "../utils/netflix_background.jpg";
import Header from "./Header";
import validateForm from "../utils/validateForm";
import { app } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleFormToggle = () => {
    setIsSignForm(!isSignForm);
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null)

  const handleBtnClick = () => {
    const message = validateForm(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value
    );

    setErrorMsg(message);

    if (message) return;

    if (!isSignForm) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/180944581?s=100&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "---" + errorMessage);
        });
        
       
    } else {
      const auth = getAuth(app);
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user signed in", user);

         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
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
