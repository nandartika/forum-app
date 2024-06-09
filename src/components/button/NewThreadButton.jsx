import { useNavigate } from "react-router-dom";
import AddButtonIcon from "../../assets/icons/add-button.svg?react";

export default function NewThreadButton() {
  const navigate = useNavigate();

  const toggleOnClick = () => {
    navigate("new");
  };

  return (
    <button
      onClick={toggleOnClick}
      className="fixed bottom-20 right-10 text-5xl text-secondary"
    >
      <AddButtonIcon />
    </button>
  );
}
