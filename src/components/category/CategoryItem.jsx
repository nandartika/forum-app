import PropTypes from "prop-types";

export default function CategoryItem({ children }) {
  return (
    <p className="w-fit rounded-md border px-2 py-1 text-sm">#{children}</p>
  );
}

CategoryItem.propTypes = {
  children: PropTypes.string.isRequired,
};
