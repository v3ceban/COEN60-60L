import React from "react";

const Saturday = () => {
	function calcPercent(x) {
		if (x == 0) {
			return 10;
		}
		return (x * 250) / 100;
	}
	return (
		<section>
			<h2>Saturday</h2>
			<p>
				Saturdays, just like Sundays, are my work days. I spend most of the day <span className="Working">Working</span>{" "}
				and <span className="Driving">Driving</span> (at the same time but again,{" "}
				<span className="Driving">Driving</span> during <span className="Working">Working </span> hours are not included
				to not overflow the 24 hrs cap). After work I can spend some time playing{" "}
				<span className="Gaming">Videogames</span> to destress. After that I usually do{" "}
				<span className="Homework">Homework</span>. The rest of the day I spend with my{" "}
				<span className="Family">Family</span> and then go to <span className="Sleeping">Sleep</span>.
			</p>
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
					<rect x="10" y="11" width={calcPercent(0)} height="10" rx="5" className="College">
						<title>College: 0 hours (0.00%)</title>
					</rect>
					<rect x="10" y="33" width={calcPercent(20)} height="10" rx="5" className="Driving">
						<title>Driving: 2 hours (8.30%)</title>
					</rect>
					<rect x="10" y="55" width={calcPercent(25)} height="10" rx="5" className="Homework">
						<title>Homework: 2.5 hours (10.4%)</title>
					</rect>
					<rect x="10" y="77" width={calcPercent(10)} height="10" rx="5" className="Gaming">
						<title>Gaming: 1 hour (4.17%)</title>
					</rect>
					<rect x="10" y="99" width={calcPercent(100)} height="10" rx="5" className="Working">
						<title>Working: 10 hours (41.7%)</title>
					</rect>
					<rect x="10" y="122" width={calcPercent(75)} height="10" rx="5" className="Sleeping">
						<title>Sleeping: 7.5 hours (31.3%)</title>
					</rect>
					<rect x="10" y="144" width={calcPercent(10)} height="10" rx="5" className="Family">
						<title>Family: 1 hour (4.16%)</title>
					</rect>
				</svg>
				<ol>
					<li className="College">0 hrs</li>
					<li className="Driving">2 hrs</li>
					<li className="Homework">2.5 hrs</li>
					<li className="Gaming">1 hr</li>
					<li className="Working">10 hrs</li>
					<li className="Sleeping">7.5 hrs</li>
					<li className="Family">1 hr</li>
				</ol>
			</div>
		</section>
	);
};

export default Saturday;
