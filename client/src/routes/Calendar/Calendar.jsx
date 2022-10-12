import React from 'react'
import "./calendar.scss";
import Navbar from "../../components/common/Navbar/Navbar"
import Button from "../../components/common/Button/Button"
import {FcGoogle} from "react-icons/fc";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Calendar = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    // return await axios.get("http://localhost:5000/auth/google");
    window.open("http://localhost:5000/auth/google", "_self");
  }
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
          <FcGoogle className="calendar-google-logo"/>
          Sign In and Connect to Google Calendar
        </Button>
      </div>
      {/* <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showTabs=1&src=cmljaGFyZGhhbjgyQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB&color=%2333B679&color=%230B8043"
        frameBorder="0"
        scrolling="no"
        className="calendar-iframe"
      /> */}
    </section>
  );
}

export default Calendar