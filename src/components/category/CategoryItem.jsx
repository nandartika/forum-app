import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

export default function CategoryItem({ children, size = "sm" }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryActive = searchParams.get("category") === children;
  const isActive = categoryActive && size === "md";

  const toggleClick = () => {
    if (categoryActive) {
      setSearchParams({});
    } else {
      setSearchParams({ category: children.toLowerCase() });
    }
  };

  return (
    <p
      className={
        (isActive ? `bg-secondary text-primary` : "") +
        " " +
        `w-fit rounded-md border px-2 py-1 text-${size}`
      }
      onClick={toggleClick}
    >
      #{children}
    </p>
  );
}

CategoryItem.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};
