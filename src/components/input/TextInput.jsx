import PropTypes from "prop-types";

export default function TextInput({ name, type = "text", placeholder }) {
  return (
    <input type={type} name={name} className="border rounded-md p-1" placeholder={placeholder} />
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
