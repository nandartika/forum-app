import PropTypes from "prop-types";

export default function Button({ type = "button", children }) {
  return (
    <button
      type={type}
      className="w-full rounded-md bg-secondary p-1 text-primary"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};
