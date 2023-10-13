import React, { useState } from "react";
import Header from "./header";
import Overview from "./days/overview";
import Summary from "./days/summary";
import Sunday from "./days/sunday";
import Monday from "./days/monday";
import Tuesday from "./days/tuesday";
import Wednesday from "./days/wednesday";
import Thursday from "./days/thursday";
import Friday from "./days/friday";
import Saturday from "./days/saturday";

export default function Main() {
	const [currentPage, setPage] = useState("Overview");

	const pageMap = {
		Overview: <Overview />,
		Sunday: <Sunday />,
		Monday: <Monday />,
		Tuesday: <Tuesday />,
		Wednesday: <Wednesday />,
		Thursday: <Thursday />,
		Friday: <Friday />,
		Saturday: <Saturday />,
		Summary: <Summary />,
	};

	return (
		<>
			<Header setPage={setPage} />
			<main>{pageMap[currentPage]}</main>
		</>
	);
}
