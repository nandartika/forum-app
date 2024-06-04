import PropTypes from "prop-types";
import { cloneElement } from "react";

export default function ReactionButton({ children, icon, onClickHanler }) {
  const cloneIcon = cloneElement(icon, { className: "mr-1 w-4 h-4 fill-current" });

  return (
    <button onClick={onClickHanler} className="flex flex-row items-center">
      {cloneIcon}
      <span>{children}</span>
    </button>
  );
}

ReactionButton.propTypes = {
  children: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.object.isRequired,
  onClickHanler: PropTypes.func,
};
