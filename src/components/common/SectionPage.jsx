import PropTypes from "prop-types";

export default function SectionPage({ children }) {
  return <section className="p-8">{children}</section>;
}

SectionPage.propTypes = {
  children: PropTypes.any.isRequired,
};
