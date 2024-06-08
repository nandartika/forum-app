import PropTypes from "prop-types";

export default function ThreadBody({ children, className }) {
  return (
    <p className={className} dangerouslySetInnerHTML={{ __html: children }} />
  );
}

ThreadBody.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
};
