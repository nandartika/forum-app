import PropTypes from "prop-types";
import { cloneElement } from "react";

export default function NavigationItem({ label, children, toggleOnClick }) {
  const cloneChild = cloneElement(children, { className: "h-6 w-6" });

  return (
    <div
      className="flex w-fit flex-col items-center gap-0.5"
      onClick={toggleOnClick}
    >
      <div className="w-fit">{cloneChild}</div>
      <p className="text-sm">{label}</p>
    </div>
  );
}

NavigationItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  toggleOnClick: PropTypes.func,
};
