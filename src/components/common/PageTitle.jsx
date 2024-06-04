import PropTypes from "prop-types";

export default function PageTitle({ children }) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
