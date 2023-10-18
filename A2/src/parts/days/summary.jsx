import React from "react";

const Summary = () => {
  function calcPercent(x) {
    if (x == 0) {
      return 10;
    }
    return (x * 250) / 100;
  }
  return (
    <section>
      <h2>Summary</h2>
      <p>
        Overall, I spend most of my time{" "}
        <span className="Sleeping">Sleeping</span>, doing{" "}
        <span className="Homework">Homework</span>, or in{" "}
        <span className="College">College</span>. It is not what I expected
        because I feel like I procrastinate a lot and don&apos;t do anything
        useful. However, after analyzing what I do during the week, I do not
        spend that much time in vain. In fact, I spend more than 8.5 hours per
        week studying (either in <span className="College">College</span> or
        doing <span className="Homework">Homework</span>), which is a full-time
        job in terms of time commitment.
      </p>
      <h3 className="Increase">To Increase:</h3>
      <p>
        Although <span className="Sleeping">Sleep</span> takes the most time of
        my week (7.75 hrs on average), I don&apos;t feel rested and would like
        to <span className="Sleeping">Sleep</span> some more. I would also like
        to increase the time I spend with my{" "}
        <span className="Family">Family</span> and{" "}
        <span className="Working">Work</span> on something interesting during
        the regular working days.
      </p>
      <h3 className="Decrease">To Decrease:</h3>
      <p>
        I would really like to decrease the time I spend{" "}
        <span className="Driving">Driving</span> and{" "}
        <span className="Working">Working</span>, especially on weekends. I
        don&apos;t like my job and would like to do something else that would
        help me to grow as a person and as a professional.
      </p>
      <div className="infographics">
        <ol>
          <li className="College">College</li>
          <li className="Driving">
            Driving <span className="Decrease">--</span>
          </li>
          <li className="Homework">Homework</li>
          <li className="Gaming">Gaming</li>
          <li className="Working">
            Working <span className="Decrease">-</span>
            <span className="Increase">+</span>
          </li>
          <li className="Sleeping">
            Sleeping <span className="Increase">++</span>
          </li>
          <li className="Family">
            Family <span className="Increase">++</span>
          </li>
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
            width={calcPercent(44.3)}
            height="10"
            rx="5"
            className="College"
          >
            <title>College: 4.43 hours (18.5%)</title>
          </rect>
          <rect
            x="10"
            y="33"
            width={calcPercent(15)}
            height="10"
            rx="5"
            className="Driving"
          >
            <title>Driving: 1.5 hours (6.25%)</title>
          </rect>
          <rect
            x="10"
            y="55"
            width={calcPercent(41.8)}
            height="10"
            rx="5"
            className="Homework"
          >
            <title>Homework: 4.18 hours (17.4%)</title>
          </rect>
          <rect
            x="10"
            y="77"
            width={calcPercent(10.7)}
            height="10"
            rx="5"
            className="Gaming"
          >
            <title>Gaming: 1.07 hours (4.46%)</title>
          </rect>
          <rect
            x="10"
            y="99"
            width={calcPercent(34.3)}
            height="10"
            rx="5"
            className="Working"
          >
            <title>Working: 3.43 hours (14.3%)</title>
          </rect>
          <rect
            x="10"
            y="122"
            width={calcPercent(77.5)}
            height="10"
            rx="5"
            className="Sleeping"
          >
            <title>Sleeping: 7.75 hours (32.3%)</title>
          </rect>
          <rect
            x="10"
            y="144"
            width={calcPercent(16.4)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 1.64 hours (6.83%)</title>
          </rect>
        </svg>
        <ol>
          <li className="College">4.43 hrs</li>
          <li className="Driving">1.50 hrs</li>
          <li className="Homework">4.18 hrs</li>
          <li className="Gaming">1.07 hrs</li>
          <li className="Working">3.43 hrs</li>
          <li className="Sleeping">7.75 hrs</li>
          <li className="Family">1.64 hrs</li>
        </ol>
      </div>
    </section>
  );
};

export default Summary;
