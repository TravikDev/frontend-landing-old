import React from "react";

function Titles({ titleH1, titleH2, refs }) {
  return (
    <>
      <h1 ref={refs} className="text-h1">
        {titleH1}
      </h1>
      <h2 className="text-center">{titleH2}</h2>
    </>
  );
}

export default Titles;
