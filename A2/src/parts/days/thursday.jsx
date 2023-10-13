import React from "react";

const Thursday = () => {
	function calcPercent(x) {
		if (x == 0) {
			return 10;
		}
		return (x * 250) / 100;
	}
	return (
		<section>
			<h2>Thursday</h2>
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
					<rect x="10" y="11" width={calcPercent(85)} height="10" rx="5" className="College">
						<title>College: 8.5 hours (35.4%)</title>
					</rect>
					<rect x="10" y="33" width={calcPercent(25)} height="10" rx="5" className="Driving">
						<title>Driving: 2.5 hours (10.4%)</title>
					</rect>
					<rect x="10" y="55" width={calcPercent(50)} height="10" rx="5" className="Homework">
						<title>Homework: 5 hours (20.8%)</title>
					</rect>
					<rect x="10" y="77" width={calcPercent(0)} height="10" rx="5" className="Gaming">
						<title>Gaming: 0 hours (0.00%)</title>
					</rect>
					<rect x="10" y="99" width={calcPercent(0)} height="10" rx="5" className="Working">
						<title>Working: 0 hours (0.00%)</title>
					</rect>
					<rect x="10" y="122" width={calcPercent(75)} height="10" rx="5" className="Sleeping">
						<title>Sleeping: 7.5 hours (31.3%)</title>
					</rect>
					<rect x="10" y="144" width={calcPercent(5)} height="10" rx="5" className="Family">
						<title>Family: 30 minutes (2.08%)</title>
					</rect>
				</svg>
				<ol>
					<li className="College">8.5 hrs</li>
					<li className="Driving">2.5 hrs</li>
					<li className="Homework">5 hrs</li>
					<li className="Gaming">0 hrs</li>
					<li className="Working">0 hrs</li>
					<li className="Sleeping">7.5 hrs</li>
					<li className="Family">1/2 hr</li>
				</ol>
			</div>
		</section>
	);
};

export default Thursday;
