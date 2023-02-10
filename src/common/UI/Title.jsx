export const Title = ({ refs, children }) => {
  return (
    <>
      <h1 ref={refs} className="text-h1">
        {children}
      </h1>
    </>
  );
};
