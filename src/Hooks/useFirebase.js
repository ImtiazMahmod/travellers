import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { Alert } from "bootstrap";
import initAuth from "../Pages/Login/firebase.init";
import axios from "axios";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const [error, setError] = useState(true);
  const provider = new GoogleAuthProvider();

  ///user state observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  ///sign in with email and password
  const userLogin = (email, password, navigate, redirect_uri) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate(redirect_uri);
      })

      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  ///google login
  const googleLogin = (navigate, redirect_uri) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider)
      .then((result) => {
        // setUser(result.user);
        console.log(result.user);
        navigate(redirect_uri);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  ///new User register
  const registerUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        verifyEmail();
        updateUser(name);
        const newUser = {
          displayName: name,
          email: user.email,
        };
        newUserInfo(newUser);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => {
        setIsLoading(true);
      });
  };
  console.log(user);

  ///verify Email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      return "verify";
    });
  };
  ///user info post to server
  const newUserInfo = (newUser) => {
    axios.post("http://localhost:5000/users", newUser).then((res) => {
      ///save to database
    });
  };

  ///update user profile

  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://i.ibb.co/CQWnXtz/profile-user.png",
    })
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  ///logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //check admin
  useEffect(() => {
    axios
      .get(`https://arcane-peak-89690.herokuapp.com/users/admin/${user?.email}`)
      .then((res) => {
        console.log(res.data, admin);
        if (res.data.admin) {
          setAdmin(true);
        }
      });
  }, [user?.email, admin]);

  return {
    user,
    admin,
    userLogin,
    isLoading,
    googleLogin,
    setIsLoading,
    error,
    registerUser,
    setError,

    logout,
  };
};
export default useFirebase;
