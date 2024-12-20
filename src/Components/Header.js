import React from "react";
import jetflixLogo from "../utils/jetflix-logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);


  const user = useSelector(store =>store.user)
  const handleSignOutUser =()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
       "error"
    });
  }


  return (
    <div className="min-w-full justify-between bg-gradient-to-b from-black absolute z-30 flex">
      
        <img
          className=" rounded-lg w-40 px-8 py-2"
          alt="Netflix Logo"
          src={jetflixLogo}
        ></img>
     

     {user && (
  <div className="p-2 m-4 mt-4  flex">
    <div className="mt-4 mr-2 font-bold text-white"> Hello! {user?.displayName}</div>
    <img
      alt="usericon"
      className="h-10 m-2 mb-6"
      src={user?.photoURL } // Provide a fallback image
    />
    <button  onClick={handleSignOutUser} className="text-white font-bold rounded-lg bg-red-400 h-10 px-2 ml-6 mt-[9px] ">
      Sign out
    </button>
  </div>
)}

  </div>    
 ) 
}

export default Header;
