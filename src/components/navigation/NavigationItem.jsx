import PropTypes from "prop-types";
import { cloneElement } from "react";

export default function NavigationItem({ label, children }) {
  const cloneChild = cloneElement(children, { className: "h-6 w-6" });

  return (
    <div className="flex w-fit flex-col items-center gap-1">
      <div className="w-fit">{cloneChild}</div>
      <p>{label}</p>
    </div>
  );
}

NavigationItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
