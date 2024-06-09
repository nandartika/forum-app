import { useNavigate } from "react-router-dom";
import AddButtonIcon from "../../assets/icons/add-button.svg?react";
import { useSelector } from "react-redux";

export default function NewThreadButton() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.users.profile);

  const toggleOnClick = () => {
    navigate("new");
  };

  return (
    isLogin && (
      <button
        onClick={toggleOnClick}
        className="fixed bottom-20 right-10 text-5xl text-secondary"
      >
        <AddButtonIcon />
      </button>
    )
  );
}
