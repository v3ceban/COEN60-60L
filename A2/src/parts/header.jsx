import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Vlads Schedule Page</h1>
      <img src="https://placekitten.com/150/150" alt="vlad" />
      <nav>
        <ul>
          <li>
            <a href="#Sunday">Sunday</a>
          </li>
          <li>
            <a href="#Monday">Monday</a>
          </li>
          <li>
            <a href="#Tuesday">Tuesday</a>
          </li>
          <li>
            <a href="#Wednesday">Wednesday</a>
          </li>
          <li>
            <a href="#Thursday">Thursday</a>
          </li>
          <li>
            <a href="#Friday">Friday</a>
          </li>
          <li>
            <a href="#Saturday">Saturday</a>
          </li>
          <li>
            <a href="#Summary">Summary</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
