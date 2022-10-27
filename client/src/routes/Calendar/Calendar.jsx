import React from 'react'
import "./calendar.scss";
import Navbar from "../../components/common/Navbar/Navbar"
import Button from "../../components/common/Button/Button"
import {FcGoogle} from "react-icons/fc";
import axios from "axios";
import { useEffect, useState, useCallback } from 'react';
import {httpGetUser} from "../../hooks/requests"

const Calendar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const fetchUser = async () => {
    //   await axios.get(
    //     "http://localhost:5000/auth/login/success"
    //   ).then(resp => {
        // if(resp.status===200) return resp.json();
    //     console.log(resp);
    //     }
    //   ).then(resObj => {
    //     setUser(resObj.user)
    //   })
    // };
    // fetchUser();
     const getUser = () => {
       fetch("http://localhost:5000/auth/login/success", {
         method: "GET",
         credentials: "include",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
           "Access-Control-Allow-Credentials": true,
         },
       })
         .then((response) => {
           if (response.status === 200) return response.json();
           throw new Error("authentication has been failed!");
         })
         .then((resObject) => {
           setUser(resObject.user);
         })
         .catch((err) => {
           console.log(err);
         });
     };
     getUser();
  }, [])

  const handleGoogleLogin = () => {
    // * for development purposes only
    window.open("http://localhost:5000/auth/google", "_self");

    // * for deployment purposes only
    // window.open("https://taskr-tasktracker.herokuapp.com/auth/google", "_self");
  }
  if(!user) {
    return (
      <section className="calendar-section">
        <Navbar />
        <div className="calendar-sign-in">
          <div className="calendar-sign-in-prompt">
            To connect your tasks to Google Calendar, you need to sign in.
          </div>
          <Button
            variant="secondary"
            type="button"
            height="40px"
            width="50%"
            func={handleGoogleLogin}
          >
            <FcGoogle className="calendar-google-logo" />
            Sign In and Connect to Google Calendar
          </Button>
        </div>
      </section>
    );
  } else {
    return (
      <section className="calendar-section">
        <Navbar />
        <iframe
          src={`https://calendar.google.com/calendar/embed?src=${user.replace('@', "%40")}&ctz=Asia%2FJakarta`}
          frameBorder="0"
          scrolling="no"
          className="calendar-iframe"
        ></iframe>
      </section>
    );
  }
}

export default Calendar