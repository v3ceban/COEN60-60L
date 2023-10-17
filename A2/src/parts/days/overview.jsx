import React from "react";

const Overview = () => {
  function calcPercent(x) {
    if (x == 0) {
      return 10;
    }
    return (x * 250) / 100;
  }
  return (
    <section className="overview">
      <h2>Overview</h2>
      <p>
        This page represents my approximate schedule for Fall 2023. I selected
        to focus on 7 general activities:{" "}
        <span className="College">College</span>,{" "}
        <span className="Driving">Driving</span>,{" "}
        <span className="Homework">Homework</span>,{" "}
        <span className="Gaming">Gaming</span>,{" "}
        <span className="Working">Working</span>,{" "}
        <span className="Sleeping">Sleeping</span>, and{" "}
        <span className="Family">Family</span>. The bar chart below contains
        data on the average hours I dedicate to an activity on a particular day.
        Hovering over a section will show a more detailed explanation.
      </p>
      <p>
        Navigation items will display corresponding sections of the report that
        have even more details. Summary page displays the average statistics for
        the week, as well as my thoughts about the data and information about
        activities I would like to increase or decrease.
      </p>
      <p>
        <small>
          *All percentages are given to 3 sig. figures and have a +/-1% error
          due to rounding
          <br />
          **Press &quot;ctrl +&quot; to zoom in
        </small>
      </p>
      <div className="infographics">
        <ol>
          <li>Sunday</li>
          <li>Monday</li>
          <li>Tuesday</li>
          <li>Wednesday</li>
          <li>Thursday</li>
          <li>Friday</li>
          <li>Saturday</li>
        </ol>
        <svg
          width="270"
          height="162"
          viewBox="0 0 270 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SUNDAY */}
          <rect
            x={calcPercent(0)}
            y="11"
            width={calcPercent(100)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 2 hours (8.34%)</title>
          </rect>
          <rect
            x={calcPercent(0)}
            y="11"
            width={calcPercent(8.3)}
            height="10"
            rx="5"
            className="Driving"
          >
            <title>Driving: 2 hours (8.33%)</title>
          </rect>
          <rect
            x={calcPercent(8.3)}
            y="11"
            width={calcPercent(3.125)}
            height="10"
            rx="0"
            className="Homework"
          >
            <title>Homework: 45 minutes (3.13%)</title>
          </rect>
          <rect
            x={calcPercent(11.425)}
            y="11"
            width={calcPercent(3.125)}
            height="10"
            rx="0"
            className="Gaming"
          >
            <title>Gaming: 45 minutes (3.13%)</title>
          </rect>
          <rect
            x={calcPercent(14.55)}
            y="11"
            width={calcPercent(41.7)}
            height="10"
            rx="0"
            className="Working"
          >
            <title>Working: 10 hours (41.7%)</title>
          </rect>
          <rect
            x={calcPercent(56.25)}
            y="11"
            width={calcPercent(35.42)}
            height="10"
            rx="0"
            className="Sleeping"
          >
            <title>Sleeping: 8.5 hours (35.4%)</title>
          </rect>
          {/* MONDAY */}
          <rect
            x={calcPercent(0)}
            y="33"
            width={calcPercent(100)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 2.5 hours (11.4%)</title>
          </rect>
          <rect
            x={calcPercent(0)}
            y="33"
            width={calcPercent(26.08)}
            height="10"
            rx="5"
            className="College"
          >
            <title>College: 6.5 hours (26.1%)</title>
          </rect>
          <rect
            x={calcPercent(27.08)}
            y="33"
            width={calcPercent(3.125)}
            height="10"
            rx="0"
            className="Driving"
          >
            <title>Driving: 45 minutes (3.13%)</title>
          </rect>
          <rect
            x={calcPercent(30.205)}
            y="33"
            width={calcPercent(18.75)}
            height="10"
            rx="0"
            className="Homework"
          >
            <title>Homework: 4.5 hours (18.8%)</title>
          </rect>
          <rect
            x={calcPercent(48.955)}
            y="33"
            width={calcPercent(3.125)}
            height="10"
            rx="0"
            className="Gaming"
          >
            <title>Gaming: 45 minutes (3.13%)</title>
          </rect>
          <rect
            x={calcPercent(52.08)}
            y="33"
            width={calcPercent(4.17)}
            height="10"
            rx="0"
            className="Working"
          >
            <title>Working: 1 hour (4.17%)</title>
          </rect>
          <rect
            x={calcPercent(56.25)}
            y="33"
            width={calcPercent(33.3)}
            height="10"
            rx="0"
            className="Sleeping"
          >
            <title>Sleeping: 8 hours (33.3%)</title>
          </rect>
          {/* TUESDAY */}
          <rect
            x={calcPercent(0)}
            y="55"
            width={calcPercent(100)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 1.5 hours (6.24%)</title>
          </rect>
          <rect
            x={calcPercent(0)}
            y="55"
            width={calcPercent(29.17)}
            height="10"
            rx="5"
            className="College"
          >
            <title>College: 7 hours (29.2%)</title>
          </rect>
          <rect
            x={calcPercent(29.17)}
            y="55"
            width={calcPercent(6.25)}
            height="10"
            rx="0"
            className="Driving"
          >
            <title>Driving: 1.5 hours (6.25%)</title>
          </rect>
          <rect
            x={calcPercent(35.42)}
            y="55"
            width={calcPercent(22.92)}
            height="10"
            rx="0"
            className="Homework"
          >
            <title>Homework: 5.5 hours (22.9%)</title>
          </rect>
          <rect
            x={calcPercent(58.34)}
            y="55"
            width={calcPercent(4.17)}
            height="10"
            rx="0"
            className="Working"
          >
            <title>Working: 1 hour (4.17%)</title>
          </rect>
          <rect
            x={calcPercent(62.51)}
            y="55"
            width={calcPercent(31.25)}
            height="10"
            rx="0"
            className="Sleeping"
          >
            <title>Sleeping: 7.5 hours (31.3%)</title>
          </rect>
          {/* WEDNESDAY */}
          <rect
            x={calcPercent(0)}
            y="77"
            width={calcPercent(100)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 2 hours (6.28%)</title>
          </rect>
          <rect
            x={calcPercent(0)}
            y="77"
            width={calcPercent(27.08)}
            height="10"
            rx="5"
            className="College"
          >
            <title>College: 6.5 hours (27.1%)</title>
          </rect>
          <rect
            x={calcPercent(27.08)}
            y="77"
            width={calcPercent(4.17)}
            height="10"
            rx="0"
            className="Driving"
          >
            <title>Driving: 1 hour (4.17%)</title>
          </rect>
          <rect
            x={calcPercent(31.25)}
            y="77"
            width={calcPercent(20.83)}
            height="10"
            rx="0"
            className="Homework"
          >
            <title>Homework: 5 hours (20.8%)</title>
          </rect>
          <rect
            x={calcPercent(52.08)}
            y="77"
            width={calcPercent(4.17)}
            height="10"
            rx="0"
            className="Gaming"
          >
            <title>Gaming: 1 hour (4.17%)</title>
          </rect>
          <rect
            x={calcPercent(56.25)}
            y="77"
            width={calcPercent(4.17)}
            height="10"
            rx="0"
            className="Working"
          >
            <title>Working: 1 hour (4.17%)</title>
          </rect>
          <rect
            x={calcPercent(60.42)}
            y="77"
            width={calcPercent(33.3)}
            height="10"
            rx="0"
            className="Sleeping"
          >
            <title>Sleeping: 7.5 hours (33.3%)</title>
          </rect>
          {/* THURSDAY */}
          <rect
            x={calcPercent(0)}
            y="99"
            width={calcPercent(100)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 30 minutes (2.08%)</title>
          </rect>
          <rect
            x={calcPercent(0)}
            y="99"
            width={calcPercent(35.42)}
            height="10"
            rx="5"
            className="College"
          >
            <title>College: 8.5 hours (35.4%)</title>
          </rect>
          <rect
            x={calcPercent(35.42)}
            y="99"
            width={calcPercent(10.42)}
            height="10"
            rx="0"
            className="Driving"
          >
            <title>Driving: 2.5 hours (10.4%)</title>
          </rect>
          <rect
            x={calcPercent(45.84)}
            y="99"
            width={calcPercent(20.83)}
            height="10"
            rx="0"
            className="Homework"
          >
            <title>Homework: 5 hours (20.8%)</title>
          </rect>
          <rect
            x={calcPercent(66.67)}
            y="99"
            width={calcPercent(31.25)}
            height="10"
            rx="0"
            className="Sleeping"
          >
            <title>Sleeping: 7.5 hours (31.3%)</title>
          </rect>
          {/* FRIDAY */}
          <rect
            x={calcPercent(0)}
            y="122"
            width={calcPercent(100)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 2 hours (8.33%)</title>
          </rect>
          <rect
            x={calcPercent(0)}
            y="122"
            width={calcPercent(10.42)}
            height="10"
            rx="5"
            className="College"
          >
            <title>College: 2.5 hours (10.4%)</title>
          </rect>
          <rect
            x={calcPercent(10.42)}
            y="122"
            width={calcPercent(3.125)}
            height="10"
            rx="0"
            className="Driving"
          >
            <title>Driving: 45 minutes (3.13%)</title>
          </rect>
          <rect
            x={calcPercent(13.545)}
            y="122"
            width={calcPercent(25)}
            height="10"
            rx="0"
            className="Homework"
          >
            <title>Homework: 6 hours (25.0%)</title>
          </rect>
          <rect
            x={calcPercent(38.545)}
            y="122"
            width={calcPercent(16.67)}
            height="10"
            rx="0"
            className="Gaming"
          >
            <title>Gaming: 4 hours (16.7%)</title>
          </rect>
          <rect
            x={calcPercent(55.215)}
            y="122"
            width={calcPercent(4.17)}
            height="10"
            rx="0"
            className="Working"
          >
            <title>Working: 1 hour (4.17%)</title>
          </rect>
          <rect
            x={calcPercent(59.385)}
            y="122"
            width={calcPercent(32.29)}
            height="10"
            rx="0"
            className="Sleeping"
          >
            <title>Sleeping: 7.75 hours (32.3%)</title>
          </rect>
          {/* SATURDAY */}
          <rect
            x={calcPercent(0)}
            y="144"
            width={calcPercent(100)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 1 hour (4.16%)</title>
          </rect>
          <rect
            x={calcPercent(0)}
            y="144"
            width={calcPercent(8.3)}
            height="10"
            rx="5"
            className="Driving"
          >
            <title>Driving: 2 hours (8.30%)</title>
          </rect>
          <rect
            x={calcPercent(8.3)}
            y="144"
            width={calcPercent(10.42)}
            height="10"
            rx="0"
            className="Homework"
          >
            <title>Homework: 2.5 hours (10.4%)</title>
          </rect>
          <rect
            x={calcPercent(18.72)}
            y="144"
            width={calcPercent(4.17)}
            height="10"
            rx="0"
            className="Gaming"
          >
            <title>Gaming: 1 hour (4.17%)</title>
          </rect>
          <rect
            x={calcPercent(22.89)}
            y="144"
            width={calcPercent(41.7)}
            height="10"
            rx="0"
            className="Working"
          >
            <title>Working: 10 hours (41.7%)</title>
          </rect>
          <rect
            x={calcPercent(64.59)}
            y="144"
            width={calcPercent(31.25)}
            height="10"
            rx="0"
            className="Sleeping"
          >
            <title>Sleeping: 7.5 hours (31.3%)</title>
          </rect>
        </svg>
        <ol>
          <li>10 hrs</li>
          <li>8 hrs</li>
          <li>7.5 hrs</li>
          <li>7.5 hrs</li>
          <li>8.5 hrs</li>
          <li>7.75 hrs</li>
          <li>10 hrs</li>
        </ol>
      </div>
    </section>
  );
};

export default Overview;
