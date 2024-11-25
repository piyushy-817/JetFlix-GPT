import React from "react";
import jetflixLogo from "../utils/jetflix-logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(store =>store.user)
const navigate  = useNavigate()
  const handleSignOutUser =()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
       "error"
    });
  }


  return (
    <div className="w-screen justify-between bg-gradient-to-b from-black absolute z-30 flex">
      
        <img
          className=" rounded-lg w-40 px-8 py-2"
          alt="Netflix Logo"
          src={jetflixLogo}
        ></img>
     

     {user && (
  <div className="p-2 m-4 flex">
    <img
      alt="usericon"
      className="h-10 m-2"
      src={user?.photoURL } // Provide a fallback image
    />
    <button onClick={handleSignOutUser} className="text-white font-bold">
      Sign out
    </button>
  </div>
)}

  </div>    
 ) 
}

export default Header;
