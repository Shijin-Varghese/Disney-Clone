import React, { useEffect } from "react";

import styled from "styled-components";
import { selectUserName, selectUserPhoto } from "../features/user/userSlice";
import { setUserLogin, setSignout } from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  provider,
  GoogleAuthProvider,
} from "../firebase";
import "../App.css";
function Header() {
  const mystyle = {
    textDecoration: "none",
  };

  const dispatch = useDispatch(setUserLogin);
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    // firebase remeber user in cookies
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);
  const signIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.

        let user = result.user;
        console.log(user.displayName, "sss");
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };

  const signOut = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      dispatch(setSignout());
      navigate("/login");
    });
  };

  return (
    <div className="Nav">
      <img className="Logo" src="/images/logo.svg"></img>
      {!username ? (
        <div className="LoginContainer">
          <div onClick={signIn} className="Login">
            Login
          </div>
        </div>
      ) : (
        <>
          <div className="Navmenu">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <div>
                <img src="/images/home-icon.svg"></img>
                <span style={{ letterSpacing: 1.24, fontSize: 13 }}>Home</span>
              </div>
            </Link>
            <div>
              <img src="/images/search-icon.svg"></img>
              <span>SEARCH</span>
            </div>
            <div>
              <img src="/images/watchlist-icon.svg"></img>
              <span>WATCHLIST</span>
            </div>
            <div>
              <img src="/images/original-icon.svg"></img>
              <span>ORIGINALS</span>
            </div>
            <div>
              <img src="/images/movie-icon.svg"></img>
              <span>MOVIES</span>
            </div>
            <div>
              <img src="/images/series-icon.svg"></img>
              <span>SERIES</span>
            </div>
          </div>
          <img
            className="Userimg"
            onClick={signOut}
            src="data:image/jpeg;base64,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"
          ></img>
        </>
      )}
    </div>
  );
}

export default Header;
// const Nav = styled.nav`
//   height: 70px;
//   background: #090b13;
//   display: flex;
//   align-items: center;
//   padding: 0 36;
//   overflow-x: hidden;
// `;
// const Logo = styled.img`
//   width: 80px;
// `;
// const Navmenu = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: center;
//   margin-left: 25px;
//   div {
//     display: flex;
//     align-items: center;
//     padding: 0 12px;
//     cursor: pointer;
//     img {
//       height: 20px;
//     }
//     span {
//       font-size: 13px;
//       letter-spacing: 1.24px;
//       position: relative;
//       //   it create small div around span
//       &:after {
//         content: "";
//         height: 2px;
//         background: white;
//         position: absolute;
//         left: 0;
//         right: 0;
//         bottom: -6px;
//         opacity: 0;
//         transform-origin: left-center;
//         transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//         transform: scaleX(0);
//       }
//     }
//     &:hover {
//       span:after {
//         transform: scaleX(1);
//         opacity: 1;
//       }
//     }
//   }
// `;
// const Userimg = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
// `;
// const Login = styled.div`
//   border: 1px solid #f9f9f9;
//   padding: 8px 16px;
//   border-radius: 4px;
//   letter-spacing: 1.4px;
//   text-transform: uppercase;
//   background: rgb(0, 0, 0, 0.6);
//   transition: all 0.2s ease 0s;
//   cursor: pointer;
//   &:hover {
//     background: #f9f9f9;
//     color: black;
//     border-color: transparent;
//   }
// `;
// const LoginContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: flex-end;
// `;
