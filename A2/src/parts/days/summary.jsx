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
					<rect x="10" y="11" width={calcPercent(44.3)} height="10" rx="5" className="College">
						<title>College: 4.43 hours (18.5%)</title>
					</rect>
					<rect x="10" y="33" width={calcPercent(15)} height="10" rx="5" className="Driving">
						<title>Driving: 1.5 hours (6.25%)</title>
					</rect>
					<rect x="10" y="55" width={calcPercent(41.8)} height="10" rx="5" className="Homework">
						<title>Homework: 4.18 hours (17.4%)</title>
					</rect>
					<rect x="10" y="77" width={calcPercent(10.7)} height="10" rx="5" className="Gaming">
						<title>Gaming: 1.07 hours (4.46%)</title>
					</rect>
					<rect x="10" y="99" width={calcPercent(34.3)} height="10" rx="5" className="Working">
						<title>Working: 3.43 hours (14.3%)</title>
					</rect>
					<rect x="10" y="122" width={calcPercent(77.5)} height="10" rx="5" className="Sleeping">
						<title>Sleeping: 7.75 hours (32.3%)</title>
					</rect>
					<rect x="10" y="144" width={calcPercent(16.4)} height="10" rx="5" className="Family">
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
