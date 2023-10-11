import React from "react";

const Sunday = () => {
  return (
    <section>
      <h2>Sunday</h2>
      <p>
        Sundays are my work days, so most of the day I spend{" "}
        <span className="Working">Working</span> and{" "}
        <span className="Driving">Driving</span>, as it is an important part of
        my work. After work I can spend a little time on{" "}
        <span className="Gaming">Gaming</span> or{" "}
        <span className="Homework">Homework</span> if I still have something
        left to do. I spend the remaining time of my day with my{" "}
        <span className="Family">Family</span> and then go to{" "}
        <span className="Sleeping">Sleep</span>.
      </p>
      <div className="infographics">
        <ol>
          <li>
            <span className="College">College</span> - 0 hrs
          </li>
          <li>
            <span className="Driving">Driving</span> - 12 hrs
          </li>
          <li>
            <span className="Homework">Homework</span> - 45 mins
          </li>
          <li>
            <span className="Gaming">Gaming</span> - 45 mins
          </li>
          <li>
            <span className="Working">Working</span> - 10 hrs
          </li>
          <li>
            <span className="Sleeping">Sleeping</span> - 8.5 hrs
          </li>
          <li>
            <span className="Family">Family</span> - 2 hr
          </li>
        </ol>
        <svg
          width="279"
          height="162"
          viewBox="0 0 279 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="230" height="10" rx="5" fill="#F38BA8" />
          <rect x="10" y="32" width="152" height="10" rx="5" fill="#FAB387" />
          <rect x="10" y="54" width="188" height="10" rx="5" fill="#F9E2AF" />
          <rect x="10" y="76" width="93" height="10" rx="5" fill="#B4BEFE" />
          <rect x="10" y="98" width="213" height="10" rx="5" fill="#EBA0AC" />
          <rect x="10" y="120" width="152" height="10" rx="5" fill="#A6E3A1" />
          <rect x="10" y="142" width="244" height="10" rx="5" fill="#89B4FA" />
        </svg>
        <ol>
          <li className="College">Lorem ipsum dolor</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ol>
      </div>
    </section>
  );
};

export default Sunday;
