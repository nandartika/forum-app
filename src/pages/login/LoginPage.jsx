import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import PageTitle from "../../components/common/PageTitle";
import SectionPage from "../../components/common/SectionPage";
import TextInput from "../../components/input/TextInput";
import { useDispatch } from "react-redux";
import { asyncLogin } from "../../core/states/users/actions";

export default function LoginPage() {
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    dispatch(asyncLogin(email, password));
  };

  return (
    <SectionPage>
      <PageTitle>Login</PageTitle>

      <form onSubmit={onSubmitHandler} className="mt-4 flex flex-col gap-3">
        <TextInput name="email" placeholder="Email" />
        <TextInput name="password" type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </form>

      <p className="mt-4">
        Belum punya akun? <Link to="/register">Daftar di sini.</Link>
      </p>
    </SectionPage>
  );
}
