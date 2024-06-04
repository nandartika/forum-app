import PropTypes from "prop-types";

export default function CategoryItem({ children, size = "sm" }) {
  return (
    <p className={`w-fit rounded-md border px-2 py-1 text-${size}`}>
      #{children}
    </p>
  );
}

CategoryItem.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};
