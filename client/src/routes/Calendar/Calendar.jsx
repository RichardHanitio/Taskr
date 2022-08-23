import React from 'react'
import "./calendar.scss";
import Navbar from "../../components/common/Navbar/Navbar"

const Calendar = () => {
  return (
    <section className="calendar-section">
      <Navbar />
      <div className="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showTabs=1&src=cmljaGFyZGhhbjgyQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB&color=%2333B679&color=%230B8043"
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </section>
  );
}

export default Calendar