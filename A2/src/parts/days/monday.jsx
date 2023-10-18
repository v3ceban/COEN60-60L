import React from "react";

const Monday = () => {
  function calcPercent(x) {
    if (x == 0) {
      return 10;
    }
    return (x * 250) / 100;
  }
  return (
    <section>
      <h2>Monday</h2>
      <p>
        Monday is the start of school week, so I spend most of the day in{" "}
        <span className="College">College</span> and doing some of the{" "}
        <span className="Homework">Homework</span> assignments for the week. I
        don&apos;t have much time for <span className="Gaming">Games</span>, but
        I do play some while I wait in line to see my doctor in the morning.
        After I&apos;m done with <span className="College">College</span> and{" "}
        <span className="Homework">Homework</span>, I usually do some{" "}
        <span className="Working">Work</span> if I have something to do. The
        rest of my evening I spend with my{" "}
        <span className="Family">Family</span> and go to{" "}
        <span className="Sleeping">Bed</span> when it gets late.
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
            width={calcPercent(65)}
            height="10"
            rx="5"
            className="College"
          >
            <title>College: 6.5 hours (26.1%)</title>
          </rect>
          <rect
            x="10"
            y="33"
            width={calcPercent(7.5)}
            height="10"
            rx="5"
            className="Driving"
          >
            <title>Driving: 45 minutes (3.13%)</title>
          </rect>
          <rect
            x="10"
            y="55"
            width={calcPercent(45)}
            height="10"
            rx="5"
            className="Homework"
          >
            <title>Homework: 4.5 hours (18.8%)</title>
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
            width={calcPercent(10)}
            height="10"
            rx="5"
            className="Working"
          >
            <title>Working: 1 hour (4.17%)</title>
          </rect>
          <rect
            x="10"
            y="122"
            width={calcPercent(80)}
            height="10"
            rx="5"
            className="Sleeping"
          >
            <title>Sleeping: 8 hours (33.3%)</title>
          </rect>
          <rect
            x="10"
            y="144"
            width={calcPercent(25)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 2.5 hours (11.4%)</title>
          </rect>
        </svg>
        <ol>
          <li className="College">6.5 hrs</li>
          <li className="Driving">3/4 hr</li>
          <li className="Homework">4.5 hrs</li>
          <li className="Gaming">3/4 hr</li>
          <li className="Working">1 hr</li>
          <li className="Sleeping">8 hrs</li>
          <li className="Family">2.5 hrs</li>
        </ol>
      </div>
    </section>
  );
};

export default Monday;
