import React, { useState } from "react";
import Header from "./header";
import Sunday from "./sunday";
import Monday from "./monday";
import Tuesday from "./tuesday";
import Wednesday from "./wednesday";
import Thursday from "./thursday";
import Friday from "./friday";
import Saturday from "./saturday";
import Summary from "./summary";

export default function Main() {
  const [currentPage, setPage] = useState("Summary");

  const pageMap = {
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
