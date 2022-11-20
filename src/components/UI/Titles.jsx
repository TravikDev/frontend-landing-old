import React from "react";

function Titles({ description, refs, children }) {
  return (
    <>
      <h1 ref={refs} className="text-h1">
        {children}
      </h1>
      <p className="text-center">{description}</p>
    </>
  );
}

export default Titles;
