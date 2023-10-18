import React from "react";

const Sunday = () => {
  function calcPercent(x) {
    if (x == 0) {
      return 10;
    }
    return (x * 250) / 100;
  }
  return (
    <section>
      <h2>Sunday</h2>
      <p>
        Sundays are my work days, so most of the day I spend{" "}
        <span className="Working">Working</span> and{" "}
        <span className="Driving">Driving</span>, as it is an important part of
        my work. I don&apos;t include driving during work hours as it would
        overflow the 24-hour cap. After work, I can spend a little time on{" "}
        <span className="Gaming">Games</span> or{" "}
        <span className="Homework">Homework</span> if I still have something
        left to do. I spend the remaining time of my day with my{" "}
        <span className="Family">Family</span> and then go to{" "}
        <span className="Sleeping">Sleep</span>.
      </p>
      <div className="infographics">
        <ol>
          <li className="College">College</li>
          <li className="Driving">Driving</li>
          <li className="Homework">Homework</li>
          <li className="Gaming">Gaming</li>
          <li className="Working">Working</li>
          <li className="Sleeping">Sleeping</li>
          <li className="Family">Family</li>
        </ol>
        <svg
          width="270"
          height="162"
          viewBox="0 0 270 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="11"
            width={calcPercent(0)}
            height="10"
            rx="5"
            className="College"
          >
            <title>College: 0 hours (0.00%)</title>
          </rect>
          <rect
            x="10"
            y="33"
            width={calcPercent(20)}
            height="10"
            rx="5"
            className="Driving"
          >
            <title>Driving: 2 hours (8.33%)</title>
          </rect>
          <rect
            x="10"
            y="55"
            width={calcPercent(7.5)}
            height="10"
            rx="5"
            className="Homework"
          >
            <title>Homework: 45 minutes (3.13%)</title>
          </rect>
          <rect
            x="10"
            y="77"
            width={calcPercent(7.5)}
            height="10"
            rx="5"
            className="Gaming"
          >
            <title>Gaming: 45 minutes (3.13%)</title>
          </rect>
          <rect
            x="10"
            y="99"
            width={calcPercent(100)}
            height="10"
            rx="5"
            className="Working"
          >
            <title>Working: 10 hours (41.7%)</title>
          </rect>
          <rect
            x="10"
            y="122"
            width={calcPercent(85)}
            height="10"
            rx="5"
            className="Sleeping"
          >
            <title>Sleeping: 8.5 hours (35.4%)</title>
          </rect>
          <rect
            x="10"
            y="144"
            width={calcPercent(20)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 2 hours (8.34%)</title>
          </rect>
        </svg>
        <ol>
          <li className="College">0 hrs</li>
          <li className="Driving">2 hrs</li>
          <li className="Homework">3/4 hr</li>
          <li className="Gaming">3/4 hr</li>
          <li className="Working">10 hrs</li>
          <li className="Sleeping">8.5 hrs</li>
          <li className="Family">2 hr</li>
        </ol>
      </div>
    </section>
  );
};

export default Sunday;
