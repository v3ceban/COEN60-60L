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
      <p></p>
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
            y="10"
            width={calcPercent(65)}
            height="10"
            rx="5"
            className="College"
          />
          <rect
            x="10"
            y="32"
            width={calcPercent(7.5)}
            height="10"
            rx="5"
            className="Driving"
          />
          <rect
            x="10"
            y="54"
            width={calcPercent(45)}
            height="10"
            rx="5"
            className="Homework"
          />
          <rect
            x="10"
            y="76"
            width={calcPercent(7.5)}
            height="10"
            rx="5"
            className="Gaming"
          />
          <rect
            x="10"
            y="98"
            width={calcPercent(10)}
            height="10"
            rx="5"
            className="Working"
          />
          <rect
            x="10"
            y="120"
            width={calcPercent(80)}
            height="10"
            rx="5"
            className="Sleeping"
          />
          <rect
            x="10"
            y="142"
            width={calcPercent(25)}
            height="10"
            rx="5"
            className="Family"
          />
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
