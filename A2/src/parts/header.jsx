import React, { useState } from "react";

export default function Header({ setPage }) {
	const [activeButtons, setActiveButtons] = useState({
		Summary: true,
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
			<img src="https://placekitten.com/150/150" alt="Schedule Page Logo" />
			<nav>
				<ul>
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
				</ul>
			</nav>
		</header>
	);
}

const PropTypes = "pagename";

Header.propTypes = {
	setPage: PropTypes.toString.isRequired,
};
