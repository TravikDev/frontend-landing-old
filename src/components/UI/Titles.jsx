import React from "react";

function Titles({ description, refs, children }) {
  return (
    <>
      <h1 ref={refs} className="text-h1">
        {/* Full title */}
        {children}
      </h1>
      {/* Description */}
      <p className="text-center">{description}</p>
    </>
  );
}

export default Titles;
