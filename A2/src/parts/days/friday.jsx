import React from "react";

const Friday = () => {
	function calcPercent(x) {
		if (x == 0) {
			return 10;
		}
		return (x * 250) / 100;
	}
	return (
		<section>
			<h2>Friday</h2>
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
				<svg width="270" height="162" viewBox="0 0 270 162" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="10" y="11" width={calcPercent(25)} height="10" rx="5" className="College">
						<title>College: 2.5 hours (10.4%)</title>
					</rect>
					<rect x="10" y="33" width={calcPercent(7.5)} height="10" rx="5" className="Driving">
						<title>Driving: 45 minutes (3.13%)</title>
					</rect>
					<rect x="10" y="55" width={calcPercent(60)} height="10" rx="5" className="Homework">
						<title>Homework: 6 hours (25.0%)</title>
					</rect>
					<rect x="10" y="77" width={calcPercent(40)} height="10" rx="5" className="Gaming">
						<title>Gaming: 4 hours (16.7%)</title>
					</rect>
					<rect x="10" y="99" width={calcPercent(10)} height="10" rx="5" className="Working">
						<title>Working: 1 hour (4.17%)</title>
					</rect>
					<rect x="10" y="122" width={calcPercent(77.5)} height="10" rx="5" className="Sleeping">
						<title>Sleeping: 7.75 hours (32.3%)</title>
					</rect>
					<rect x="10" y="144" width={calcPercent(20)} height="10" rx="5" className="Family">
						<title>Family: 2 hours (8.33%)</title>
					</rect>
				</svg>
				<ol>
					<li className="College">2.5 hrs</li>
					<li className="Driving">3/4 hr</li>
					<li className="Homework">6 hrs</li>
					<li className="Gaming">4 hrs</li>
					<li className="Working">1 hr</li>
					<li className="Sleeping">7.75 hrs</li>
					<li className="Family">2 hrs</li>
				</ol>
			</div>
		</section>
	);
};

export default Friday;
