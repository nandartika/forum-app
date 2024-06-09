import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import PageTitle from "../../components/common/PageTitle";
import SectionPage from "../../components/common/SectionPage";
import TextInput from "../../components/input/TextInput";
import { asyncNewThread } from "../../core/states/threads/action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NewThreadPage() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.users.profile);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) navigate("/");
  }, [isLogin, navigate]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const category = formData.get("category");
    const body = formData.get("body");

    const request = {
      title,
      category,
      body,
    };

    dispatch(asyncNewThread(request));
  };

  return (
    <SectionPage>
      <PageTitle>Buat Diskusi Baru</PageTitle>

      <form onSubmit={onSubmitHandler} className="mt-8 flex flex-col gap-2">
        <TextInput name="title" placeholder="Judul" />
        <TextInput name="category" placeholder="Kategori" />
        <textarea
          name="body"
          className="min-h-24 rounded-md border border-secondary p-1"
        />

        <Button type="submit">Buat</Button>
      </form>
    </SectionPage>
  );
}
