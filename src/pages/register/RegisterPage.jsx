import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import PageTitle from "../../components/common/PageTitle";
import SectionPage from "../../components/common/SectionPage";
import TextInput from "../../components/input/TextInput";
import { useDispatch } from "react-redux";
import { asyncRegister } from "../../core/states/users/actions";

export default function RegisterPage() {
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    dispatch(asyncRegister(name, email, password));
  };

  return (
    <SectionPage>
      <PageTitle>Register Page</PageTitle>

      <form onSubmit={onSubmitHandler} className="mt-4 flex flex-col gap-3">
        <TextInput name="name" placeholder="Name" />
        <TextInput name="email" placeholder="Email" />
        <TextInput name="password" type="password" placeholder="Password" />
        <Button type="submit">Register</Button>
      </form>

      <p className="mt-4">
        Sudah punya akun? <Link to="/login">Masuk di sini.</Link>
      </p>
    </SectionPage>
  );
}
