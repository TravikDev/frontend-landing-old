export const Button = ({
  type = "button",
  children,
  onClick = (f) => f,
}) => {
  return (
    // Template for a button
    <button
      className="red-btn mb-[0px]"
      // Some event
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

