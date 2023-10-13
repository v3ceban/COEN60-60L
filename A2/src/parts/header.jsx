import React, { useState } from "react";
import logo from "../../public/logo.png";

export default function Header({ setPage }) {
	const [activeButtons, setActiveButtons] = useState({
		Overview: true,
		Summary: false,
		Sunday: false,
		Monday: false,
		Tuesday: false,
		Wednesday: false,
		Thursday: false,
		Friday: false,
		Saturday: false,
	});

	const handleButtonClick = (buttonName) => {
		setActiveButtons((prevActiveButtons) => {
			const updatedActiveButtons = { ...prevActiveButtons };
			Object.keys(updatedActiveButtons).forEach((key) => {
				updatedActiveButtons[key] = key === buttonName;
			});
			return updatedActiveButtons;
		});
	};

	return (
		<header>
			<h1>Vlad&apos;s Schedule Page</h1>
			<img src={logo} height="100" width="90" alt="Schedule Page Logo" />
			<nav>
				<ul>
					<li>
						<button
							className={activeButtons.Overview ? "active" : ""}
							onClick={() => {
								setPage("Overview");
								handleButtonClick("Overview");
							}}
						>
							Overview
						</button>
					</li>
					<li>
						<button
							className={activeButtons.Sunday ? "active" : ""}
							onClick={() => {
								setPage("Sunday");
								handleButtonClick("Sunday");
							}}
						>
							Sunday
						</button>
					</li>
					<li>
						<button
							className={activeButtons.Monday ? "active" : ""}
							onClick={() => {
								setPage("Monday");
								handleButtonClick("Monday");
							}}
						>
							Monday
						</button>
					</li>
					<li>
						<button
							className={activeButtons.Tuesday ? "active" : ""}
							onClick={() => {
								setPage("Tuesday");
								handleButtonClick("Tuesday");
							}}
						>
							Tuesday
						</button>
					</li>
					<li>
						<button
							className={activeButtons.Wednesday ? "active" : ""}
							onClick={() => {
								setPage("Wednesday");
								handleButtonClick("Wednesday");
							}}
						>
							Wednesday
						</button>
					</li>
					<li>
						<button
							className={activeButtons.Thursday ? "active" : ""}
							onClick={() => {
								setPage("Thursday");
								handleButtonClick("Thursday");
							}}
						>
							Thursday
						</button>
					</li>
					<li>
						<button
							className={activeButtons.Friday ? "active" : ""}
							onClick={() => {
								setPage("Friday");
								handleButtonClick("Friday");
							}}
						>
							Friday
						</button>
					</li>
					<li>
						<button
							className={activeButtons.Saturday ? "active" : ""}
							onClick={() => {
								setPage("Saturday");
								handleButtonClick("Saturday");
							}}
						>
							Saturday
						</button>
					</li>
					<li>
						<button
							className={activeButtons.Summary ? "active" : ""}
							onClick={() => {
								setPage("Summary");
								handleButtonClick("Summary");
							}}
						>
							Summary
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}

const PropTypes = "pagename";

Header.propTypes = {
	setPage: PropTypes.toString.isRequired,
};
